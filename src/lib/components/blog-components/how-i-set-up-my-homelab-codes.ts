export interface CodeObject {
    code: string,
    highlights: Array<Object>,
    lang: string
}

export const setIPAddressForVM: CodeObject = {
    code: `ip=<Your IP address>::<Your gateway address>:255.255.255.0::eth0:off`,
    highlights: [],
    lang: "bash"
}

export const generateConfigs: CodeObject = {
    code: `talosctl gen config talos-proxmox-cluster https://$CONTROL_PLANE_IP:6443 --output-dir _out --install-image factory.talos.dev/installer/ce4c980550dd2ab1b17bbf2b08801c7eb59418eafe8f279833297925d67c7515:v1.10.6`,
    highlights: [],
    lang: "bash"
}

export const nanoControlplane: CodeObject = {
    code: `nano _out/controlpane.yaml`,
    highlights: [],
    lang: "bash"
}

export const machineNetworkControlplanePatch: CodeObject = {
    code: `network:
  hostname: controlplane
  interfaces:
    - interface: ens18
      addresses:
        - <Your IP address>/24
      routes:
        - network: 0.0.0.0/0
          gateway: <Your gateway IP>
      dhcp: false`,
    highlights: [],
    lang: "yaml"
}

export const applyControlplaneConfig: CodeObject = {
    code: `talosctl apply-config --insecure --nodes $CONTROL_PLANE_IP --file _out/controlplane.yaml`,
    highlights: [],
    lang: "bash"
}

export const nanoWorker: CodeObject = {
    code: `nano _out/worker.yaml`,
    highlights: [],
    lang: "bash"
}

export const machineNetworkWorkerPatch: CodeObject = {
    code: `network:
  hostname: worker
  interfaces:
    - interface: ens18
      addresses:
        - <Your IP address>/24
      routes:
        - network: 0.0.0.0/0
          gateway: <Your gateway IP>
      dhcp: false`,
    highlights: [],
    lang: "yaml"
}

export const applyWorkerConfig: CodeObject = {
    code: `talosctl apply-config --insecure --nodes $WORKER_IP --file _out/worker.yaml`,
    highlights: [],
    lang: "bash"
}

export const configureTalosconfig: CodeObject = {
    code: `export TALOSCONFIG="_out/talosconfig"
talosctl config endpoint $CONTROL_PLANE_IP
talosctl config node $CONTROL_PLANE_IP`,
    highlights: [],
    lang: "bash"
}

export const talosBootstrap: CodeObject = {
    code: `talosctl bootstrap`,
    highlights: [],
    lang: "bash"
}

export const getKubeconfig: CodeObject = {
    code: `talosctl kubeconfig .`,
    highlights: [],
    lang: "bash"
}

export const exportKubeconfig: CodeObject = {
    code: `export KUBECONFIG=kubeconfig`,
    highlights: [],
    lang: "bash"
}

export const kubectlExample: CodeObject = {
    code: `kubectl get pods -n kube-system`,
    highlights: [],
    lang: "bash"
}

export const applySealedSecrets: CodeObject = {
    code: `kubectl kustomize --enable-helm setup-homelab/sealed-secrets/ | kubectl apply -f -`,
    highlights: [],
    lang: "bash"
}

export const ciliumFileOne: CodeObject = {
    code: 
`# /setup-homelab/cilium/ip-pool.yaml
apiVersion: cilium.io/v2alpha1
kind: CiliumLoadBalancerIPPool
metadata:
  name: first-pool
spec:
  blocks:
    - start: 192.168.1.155 # Change with your own ip range
      stop: 192.168.1.170 # Change with your own ip range`,
    highlights: [],
    lang: "yaml"
}

export const applyGatewayApiCRDS: CodeObject = {
    code: `kubectl apply --server-side -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.4.0/experimental-install.yaml`,
    highlights: [],
    lang: "bash"
}

export const applyCilium: CodeObject = {
    code: `kubectl kustomize --enable-helm setup-homelab/cilium/ | kubectl apply -f -`,
    highlights: [],
    lang: "bash"
}

export const cloudflareIssuer: CodeObject = {
    code: 
`# /setup-homelab/cert-manager/cloudflare-issuer.yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: cloudflare-cluster-issuer
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: <Your email address> # <- change this
    privateKeySecretRef:
      name: cloudflare-key
    solvers:
      - dns01:
          cloudflare:
            apiTokenSecretRef:
              name: cloudflare-api-token
              key: api-token`,
    highlights: [],
    lang: "yaml"
}

export const cloudflareApiTokenSecret: CodeObject = {
    code: `kubectl create secret generic cloudflare-api-token \
  --from-literal=api-token=<Your api token> \
  -n cert-manager \
  --dry-run=client -o yaml > cloudflare-api-token-secret.yaml`,
    highlights: [],
    lang: "bash"
}

export const cloudflareApiTokenSealed: CodeObject = {
    code: `kubeseal -f cloudflare-api-token-secret.yaml -w cloudflare-api-token.yaml`,
    highlights: [],
    lang: "bash"
}

export const applyCertManager: CodeObject = {
    code: `kubectl kustomize --enable-helm setup-homelab/cert-manager/ | kubectl apply -f -`,
    highlights: [],
    lang: "bash"
}

export const certErikak: CodeObject = {
    code: 
`# /setup-homelab/gateway/cert-erikak.yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: cert-erikak # change to your domain name
  namespace: gateway
spec:
  dnsNames:
    - "*.erikak.no" # change to your domain name
    - erikak.no # change to your domain name
  issuerRef:
    group: cert-manager.io
    kind: ClusterIssuer
    name: cloudflare-cluster-issuer
  secretName: cert-erikak # change to your domain name
  usages:
    - digital signature
    - key encipherment`,
    highlights: [],
    lang: "yaml"
}

export const gateway: CodeObject = {
    code: 
`# /setup-homelab/gateway/gateway.yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: external
  namespace: gateway
spec:
  gatewayClassName: cilium
  addresses:
    - type: IPAddress
      value: 192.168.1.153 # change to an unassigned IP
  listeners:
    - protocol: HTTPS
      port: 443
      name: https-wildcard
      hostname: "*.erikak.no" # change to your domain name
      tls:
        certificateRefs:
          - kind: Secret
            name: cert-erikak # change to your domain name
      allowedRoutes:
        namespaces:
          from: All
    - protocol: HTTPS
      port: 443
      name: https-root
      hostname: erikak.no # change to your domain name
      tls:
        certificateRefs:
          - kind: Secret
            name: cert-erikak # change to your domain name
      allowedRoutes:
        namespaces:
          from: All`,
    highlights: [],
    lang: "yaml"
}

export const gatewayKustomize: CodeObject = {
    code: 
`# /setup-homelab/gateway/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - gateway.yaml
  - cert-erikak.yaml # change to your domain name
  - gateway-class.yaml
`,
    highlights: [],
    lang: "yaml"
}

export const applyGateway: CodeObject = {
    code: `kubectl kustomize --enable-helm setup-homelab/gateway/ | kubectl apply -f -`,
    highlights: [],
    lang: "bash"
}

export const createTunnel: CodeObject = {
    code: `cloudflared tunnel create <tunnel name, example: erikak-tunnel>`,
    highlights: [],
    lang: "bash"
}

export const createTunnelSecret: CodeObject = {
    code: `kubectl create secret generic tunnel-credentials \
  --from-file=credentials.json=<The path to the json tunnel file> \
  -n cloudflared \
  --dry-run=client -o yaml > tunnel-credentials-secret.yaml`,
    highlights: [],
    lang: "bash"
}

export const createTunnelSealed: CodeObject = {
    code: `kubeseal -f tunnel-credentials-secret.yaml -w tunnel-credentials.yaml`,
    highlights: [],
    lang: "bash"
}

export const cloudflaredConfig: CodeObject = {
    code: 
`# /setup-homelab/cloudflared/config.yaml
tunnel: talos-tunnel
credentials-file: /etc/cloudflared/credentials/credentials.json
metrics: 0.0.0.0:2000
no-autoupdate: true

warp-routing:
  enabled: true

ingress:
  - hostname: "*.erikak.no" # change to your domain
    service: https://cilium-gateway-external.gateway.svc.cluster.local:443
    originRequest:
      originServerName: "*.erikak.no" # change to your domain

  - hostname: "erikak.no" # change to your domain
    service: https://cilium-gateway-external.gateway.svc.cluster.local:443
    originRequest:
      originServerName: "erikak.no" # change to your domain

  - service: http_status:404
`,
    highlights: [],
    lang: "yaml"
}

export const applyTunnel: CodeObject = {
    code: `kubectl kustomize --enable-helm setup-homelab/cloudflared/ | kubectl apply -f -`,
    highlights: [],
    lang: "bash"
}

export const connectTunnelToDomain: CodeObject = {
    code: `cloudflared tunnel route dns <tunnel-name> <domain-name>`,
    highlights: [],
    lang: "bash"
}

export const connectTunnelToDomainWithStar: CodeObject = {
    code: `cloudflared tunnel route dns <tunnel-name> *.<domain-name>`,
    highlights: [],
    lang: "bash"
}

export const argocdHttproute: CodeObject = {
    code: 
`# /setup-homelab/argocd/http-route.yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: http-route
  namespace: argocd
spec:
  parentRefs:
    - name: external
      namespace: gateway
  hostnames:
    - "argocd.erikak.no" # change to your own domain
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: argocd-server
          port: 80
`,
    highlights: [],
    lang: "yaml"
}

export const applyArgocd: CodeObject = {
    code: `kubectl kustomize --enable-helm setup-homelab/argocd/ | kubectl apply -f -`,
    highlights: [],
    lang: "bash"
}

export const applyStorage: CodeObject = {
    code: `kubectl kustomize --enable-helm setup-homelab/storage/ | kubectl apply -f -`,
    highlights: [],
    lang: "bash"
}

export const applyApplications: CodeObject = {
    code: `kubectl kustomize --enable-helm applications/ | kubectl apply -f -`,
    highlights: [],
    lang: "bash"
}

export const playitAgentTokenSecret: CodeObject = {
    code: `kubectl create secret generic playitgg-agent-token \
  --from-literal=agent-token=<Your agent token> \
  -n playitgg \
  --dry-run=client -o yaml > playitgg-agent-token-secret.yaml`,
    highlights: [],
    lang: "bash"
}

export const playitAgentTokenSealed: CodeObject = {
    code: `kubeseal -f playitgg-agent-token-secret.yaml -w playitgg-agent-token.yaml`,
    highlights: [],
    lang: "bash"
}

export const applyPlayit: CodeObject = {
    code: `kubectl kustomize --enable-helm setup-homelab/playitgg/ | kubectl apply -f -`,
    highlights: [],
    lang: "bash"
}

export const getServiceIP: CodeObject = {
    code: `kubectl get svc -n <Namespace> -o wide`,
    highlights: [],
    lang: "bash"
}