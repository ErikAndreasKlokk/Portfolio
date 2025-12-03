<script lang="ts">
    import Code from "$lib/components/blog-components/code.svelte";
    import { 
        setIPAddressForVM, 
        generateConfigs, 
        nanoControlplane, 
        machineNetworkControlplanePatch, 
        applyControlplaneConfig, 
        nanoWorker, 
        machineNetworkWorkerPatch, 
        applyWorkerConfig, 
        applyCilium, 
        applySealedSecrets, 
        ciliumFileOne, 
        kubectlExample, 
        talosBootstrap, 
        getKubeconfig, 
        configureTalosconfig, 
        exportKubeconfig, 
        cloudflareIssuer,
        cloudflareApiTokenSealed,
        applyCertManager,
        applyGatewayApiCRDS,
        certErikak,
        gateway,
        gatewayKustomize,
        applyGateway,
        cloudflareApiTokenSecret,
        createTunnel,
        createTunnelSecret,
        createTunnelSealed,
        applyTunnel,
        connectTunnelToDomain,
        connectTunnelToDomainWithStar,
        cloudflaredConfig,
        argocdHttproute,
        applyArgocd,
        applyStorage,
        applyApplications,
        playitAgentTokenSecret,
        playitAgentTokenSealed,
        applyPlayit,
        getServiceIP
} from "$lib/components/blog-components/how-i-set-up-my-homelab-codes";
    import Info from "$lib/components/blog-components/info.svelte";
    import Link from "$lib/components/blog-components/Link.svelte";
    import List from "$lib/components/blog-components/list.svelte";
    import ListElem from "$lib/components/blog-components/listElem.svelte";
    import Paragraph from "$lib/components/blog-components/paragraph.svelte";
    import Title from "$lib/components/blog-components/title.svelte";
    import Undertitle from "$lib/components/blog-components/undertitle.svelte";
    import Borderbox from "$lib/components/borderbox.svelte";

</script>
  
<Title title="How i set up my homelab"/>
<Info author="Erik Andreas Klokk" createdDate="3 Dec, 2025" lastUpdatedDate="3 Dec, 2025"/>
<Paragraph>
        Much like this personal website, I wanted a homelab to use as a playground so I could test and learn new things.
        It took some time to gather the motivation to start, as it is a completely new and hard to learn field, but now that I've gotten into it, I'm really happy i did.
</Paragraph>
<Undertitle title="What technologies do i use and why?"/>
<Paragraph>
        My homelab is running <Link href="https://www.proxmox.com/en/products/proxmox-virtual-environment/overview">Proxmox VE</Link> with <Link href="https://www.talos.dev/">Talos</Link> <Link href="https://kubernetes.io/">kubernetes</Link>.
        On top of that i use <Link href="https://argoproj.github.io/cd/">Argo CD</Link> to deploy and manage my applications with a nice UI.
        <Link href="https://github.com/bitnami-labs/sealed-secrets">Sealed secrets</Link> is used to keep my secrets safe, even when pushed to my github repository.
        For networking and exposing my applications i use <Link href="https://argoproj.github.io/cd/">Cilium</Link>, <Link href="https://argoproj.github.io/cd/">Cert-manager</Link>, <Link href="https://argoproj.github.io/cd/">Cloudflared</Link> and <Link href="https://argoproj.github.io/cd/">Let's encrypt</Link>.
</Paragraph>
<Paragraph>
        My homelab is heavily inspired by a colleague, <Link href="https://github.com/vehagn">Vegard.</Link>
        I use a lot of the same technologies as he does, as I've mostly just copied him. 
        If you ever want to learn more about the techologies used in my homelab, his <Link href="https://blog.stonegarden.dev">blog</Link> is a great way to start.
</Paragraph>
<Undertitle title="How to set it up"/>
<Paragraph>
        This guide requires you to have a Proxmox VE server configured and running. 
        The start of this guide is almost a copy of the official guide on <Link href="https://docs.siderolabs.com/talos/v1.10/platform-specific-installations/virtualized-platforms/proxmox">creating a Talos Kubernetes cluster using Proxmox</Link>.
        Their guide has included images, so it might be easier to follow for some.
</Paragraph>
<Paragraph>
        The first thing to do is download the Talos ISO image. 
        Either create your own image from <Link href="https://factory.talos.dev/">https://factory.talos.dev/</Link> or download the image i use <Link href="/metal-amd64.iso" downloadBool={true}>metal-amd64.iso</Link>.
</Paragraph>
<Paragraph>
        Now head over to your proxmox window and upload the ISO image. 
        Next, press the "Create VM" button on the top right and make a VM using the Talos ISO image.
</Paragraph>
<List>
        <ListElem>
                On the general tab i call my first controlplane VM for "ctrl-01", i press the advanced checkbox and check "Start at boot".
        </ListElem>
        <ListElem>
                On the OS tab, select the correct ISO image for Talos.
        </ListElem>
        <ListElem>
                On the system page select q35 as machine and check the Qemu Agent checkbox.
        </ListElem>
        <ListElem>
                On the Disks tab set the Disk size to 100 (This is what is recommended by Sidero).
        </ListElem>
        <ListElem>
                On the CPU tab set Cores to 4 (This is also the recommended amount).
        </ListElem>
        <ListElem>
                On the memory tab set Memory to 4096 (Again, recommended).
        </ListElem>
        <ListElem>
                On network just press Next and then Finish.
        </ListElem>
</List>
<Paragraph>
        Repeat the exact same thing you just did again, but this time call it "work-01" and set how much memory, disk size and as many cores as you want to.
</Paragraph>
<Paragraph>
        Now that you have your VMs created, selct the ctrl-01 vm and start it. When the vm is booting press "e" to configure it.
        Here we will set the ip address of the controlplane node. At the second to bottom line and at the end of that line, type this:
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={setIPAddressForVM}/>
</Borderbox>
<Paragraph>
        Now that the controlplane node is running we generate the machine configs for the cluster. You will do this in the terminal on your computer. You will also need to download talosctl and kubectl before you can go further.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={generateConfigs}/>
</Borderbox>
<Paragraph>
        These machineconfigs are not perfect, as they wont keep the ip address you just put in above when you reboot the vm, so lets change that.
        Type in the below command and change machine.network to the same as below.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={nanoControlplane}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={machineNetworkControlplanePatch}/>
</Borderbox>
<Paragraph>
        Now we apply the config.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyControlplaneConfig}/>
</Borderbox>
<Paragraph>
        We have now finished configuring the controlplane node, so let's move on to the worker node. 
        Make your way over to the proxmox ui again and start the work-01 node.
        We have to change the machine config for the worker node aswell, so we do the same as we just did.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={nanoWorker}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={machineNetworkWorkerPatch}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyWorkerConfig}/>
</Borderbox>
<Paragraph>
        All we have to do now is ready up the cluster and we should be done with the setup.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={configureTalosconfig}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={talosBootstrap}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={getKubeconfig}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={exportKubeconfig}/>
</Borderbox>
<Paragraph>
        You can use the command below to see if it worked.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={kubectlExample}/>
</Borderbox>
<Paragraph>
        Now that the kubernetes setup is done, we can start actually using it.
        You can start by either forking my <Link href="https://github.com/erikandreasklokk/homelab">homelab repository</Link> or create a similar file structure yourself.
        All the files will be available at the bottom of the guide if you would rather copy and paste them manually.
</Paragraph>
<Paragraph>                
        Make your way to the homelab repository in your terminal and run the command below.
        This will install sealed secrets on to your kubernetes server. 
        Sealed secrets is used to keep your secrets sealed so that only your specific server is able to read them, meaning you can safely store them in a public github repository.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applySealedSecrets}/>
</Borderbox>
<Paragraph>
        The next thing to install is cilium. But before we install that we might have to tweak one of the files a bit. 
        Once you've done that, you can apply it by running the command below.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={ciliumFileOne}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyGatewayApiCRDS}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyCilium}/>
</Borderbox>
<Paragraph>
        Now that Cilium is installed we have to install Cert-manager. Here we have to do some manual work.
        In the cloudflare-issuer.yaml file, all you should have to do is change the email address.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={cloudflareIssuer}/>
</Borderbox>
<Paragraph>
        Next, create a SealedSecret of your cloudflare api token. To do this fetch your api token from cloudflare. 
        Once that's done run the commands below and add the cloudflare-api-token.yaml file to the cert-manager folder. Keep in mind you have to delete the existing cloudflare-api-token.yaml file if you forked the repo.
        Also, be careful not to share the api token with anyone and don't push the non-SealedSecret file including the api token to github.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={cloudflareApiTokenSecret}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={cloudflareApiTokenSealed}/>
</Borderbox>
<Paragraph>
        Once you've done that we can apply cert-manager to our cluster.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyCertManager}/>
</Borderbox>
<Paragraph>
        Now we add the gateway. This is what handles your requests. You need to change a few things here aswell, but it's really simple.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={certErikak}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={gateway}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={gatewayKustomize}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyGateway}/>
</Borderbox>
<Paragraph>
        To use cloudflared (aka cloudflare tunnel) you have to first download the <Link href="https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/">cloudflared CLI</Link>.
        You then follow the commands below to create a tunnel and create the tunnel-credentials SealedSecret.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={createTunnel}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={createTunnelSecret}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={createTunnelSealed}/>
</Borderbox>
<Paragraph>
        Before we apply the cloudflare tunnel we have to change the config.yaml file to match your domain. 
        Also change out the tunnel-credentials.yaml file with the one you created above.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={cloudflaredConfig}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyTunnel}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={connectTunnelToDomain}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={connectTunnelToDomainWithStar}/>
</Borderbox>
<Paragraph>
        The last thing we have to do is to add ArgoCD, the application that manages our applications. 
        And all we have to do is change the hostname where you want to reach ArgoCD at.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={argocdHttproute}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyArgocd}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyStorage}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyApplications}/>
</Borderbox>
<Paragraph>
        Furthermore, if you want to deploy applications that uses tcp or udp traffic (eg. Minecraft), you can use <Link href="https://playit.gg">playit.gg</Link>. 
        Keep in mind, as of writing this only minecraft tunnels are free to host. 
        If you want to deploy any other tcp or udp application through playit you have to buy the premium tier which costs 3$/month or 30$/year. 
        This is extremely cheap compared to cloudflares alternative or something like ngrok.
</Paragraph>
<Paragraph>
        Just like with cloudflared, we have to start with getting the playit agent token. 
        To do this all you have to do is make an account and create a docker agent.
        Copy the agent token/id and execute the following commands.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={playitAgentTokenSecret}/>
</Borderbox>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={playitAgentTokenSealed}/>
</Borderbox>
<Paragraph>
        Remember to replace the old playitgg-agent-token.yaml file with the newly created one before this.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={applyPlayit}/>
</Borderbox>
<Paragraph>
        Now that the playit agent is connected you have to create a tunnel for the type of traffic you want to route.
        Once you've done that get the service from the namespace your application is running in with the command below and copy the ClusterIP and Port.
</Paragraph>
<Borderbox widthFull={true} marginY="my-5">
        <Code codeObject={getServiceIP}/>
</Borderbox>
<Paragraph>
        In the playit dashboard, go to your tunnel and update the fields inside "Update Local Address" to the things you just copied.
</Paragraph>
<Paragraph>
        You should now be able to reach your service!
</Paragraph>