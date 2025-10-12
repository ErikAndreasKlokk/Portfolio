<script lang="ts">
    import Image from "$lib/components/blog-components/image.svelte";
    import Info from "$lib/components/blog-components/info.svelte";
    import Paragraph from "$lib/components/blog-components/paragraph.svelte";
    import Title from "$lib/components/blog-components/title.svelte";
    import Undertitle from "$lib/components/blog-components/undertitle.svelte";

    import oldPortfolioImg from "$lib/assets/old_portfolio.png?enhanced"
</script>
  
<Title title="What inspired my portfolio?"/>
<Info author="Erik Andreas Klokk" createdDate="17 Jan, 2025" lastUpdatedDate="01 Jul, 2025"/>
<Paragraph>
        I've always thought the idea of a personal website/portfolio was cool, so I decided to make one as a side project. 
        This site is purely for fun and to test out some of my skills, as well as showcasing what I've learned so far.
</Paragraph>
<Undertitle title="My first portfolio site"/>
<Paragraph>
    The project idea first started when all of my classmates also began creating personal websites and using them as portfolio's. 
    I thought it was super cool getting to express myself through what I was learning in school and decided to do the same.
    One problem though, I am terrible at design, so it ended up looking like this:
</Paragraph>
<Image src={oldPortfolioImg}/>
<Paragraph>
        You can even visit it 
        <a class=" underline text-yellow-500" target="_blank" href="https://gammel-portfolio.vercel.app/">here.</a>
</Paragraph>
<Paragraph>
        As you can see, it came out pretty terrible. 
        Some buttons don't work, the colors are awful, the menu does not look good at all, but atleast you can switch between languages right?
</Paragraph>
<Undertitle title="Version 2.0" />
<Paragraph>
        This time I wanted to change it up. I wanted to make it mine.
        So I took some inspiration from one of my favorite games, Minecraft.
        I started with the most basic things, a front page with some information about me and the layout.
</Paragraph>
<Paragraph>
        In the start I wanted to use every text color in Minecraft. 
        They have 4 main text colors that represent the rarity of an item. 
        The colors are white, yellow, cyan and pink.
        For me, who is terrible at design, these colors were extremely hard to use together.
        So I decided to only use the blocky design instead, and I belive it turned out well enough.
</Paragraph>
<Paragraph>
        I also wanted somewhere to list all of my hardware and to write down and show off my projects.
        The problem was that my frontpage already had a lot of information, so I could'nt really fit it there.
        So I made a menu. In the start it looked terrible, I had no idea where to put it and anywhere I put it looked wrong.
        Changes to the layout had to be made to fit it in somewhere.
        And it soon found a permanent home below my name.
</Paragraph>
<Undertitle title="The blog and Hardware list" />
<Paragraph>
        The first thing I made was a wishlist page. 
        Mostly because it was closing in on christmas and my mom asked me for one, but also because I thought it would be more fun than a piece of paper.
</Paragraph>
<Paragraph>
        Since I am kind of lazy, all I did was reuse the same component I made for my experience and education section. 
        It was easy, it looked alright and it was'nt really that important anyways.
</Paragraph>
<Paragraph>
        So when I made the route for all my hardware and my home office setup, I chose the lazy way again and copied my wishlist.
</Paragraph>
<Paragraph>
        Unfortunetly it did'nt really work out when i made the Blog route.
        Here I had to come up with something new, is what I first thought atleast.
        I'm still just as lazy, so i just reused the box from the small section under my name on the front page and added some small changes to it.
        However, the actual page with the blogpost was harder to just copy & paste.
        At first I began thinking about using a cms, like sanity, but quickly decided that plain and simple was easier and faster (I might still add it later as another side project).
        So I began looking for inspiration, mostly at blogs that were already established, but none really fit my theme.
        Therefore I just stole some of the different components and designed my own blog around them.
</Paragraph>
<Undertitle title="How it came out" />
<Paragraph>
        Personally I believe it came out surprisingly well.
        It fits me and my personality, and serves the intended purpose of a personal playground that I can show off.
        The project might be a life long one, with multiple iterations, but so far, I'm really proud of it.
        As I keep learning and figure things out, I'll keep coming back to this to test and have fun.
</Paragraph>
<Paragraph>
        It's definetly a project for anyone and everyone to try out and have fun with.
        You can of course check out the <a class=" underline text-yellow-500" target="_blank" href="https://github.com/ErikAndreasKlokk/Portfolio">github repo</a> and even fork it if you want to, but I really do believe that creating your own gives you a lot more.
</Paragraph>