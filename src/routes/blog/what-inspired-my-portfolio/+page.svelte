<script lang="ts">
    import Image from "$lib/components/blog-components/image.svelte";
    import Info from "$lib/components/blog-components/info.svelte";
    import Paragraph from "$lib/components/blog-components/paragraph.svelte";
    import Title from "$lib/components/blog-components/title.svelte";
    import Undertitle from "$lib/components/blog-components/undertitle.svelte";
</script>
  
<Title title="What inspired my portfolio?"/>
<Info author="Erik Andreas Klokk" createdDate="17 Jan, 2025" lastUpdatedDate="01 Jul, 2025"/>
<Paragraph>
    <p>
        I've always thought the idea of a personal website/portfolio was cool, so i decided to make one as a side project. 
        This site is purely for fun and to test out some of my skills, as well as showcasing what i've learned so far.
    </p>
</Paragraph>
<Undertitle title="My first portfolio site"/>
<Paragraph>
    <p>
        The project idea first started when all of my classmates also began creating personal websites and using them as portfolio's. 
        I thought it was super cool getting to express myself through what i was learning in school and decided to do the same.
        One problem though, i am terrible at design, so it ended up looking like this:
    </p>
</Paragraph>
<Image src="../old_portfolio.png"/>
<Paragraph>
    <p>
        You can even visit it 
        <a class=" underline text-yellow-500" target="_blank" href="https://gammel-portfolio.vercel.app/">here.</a>
    </p>
</Paragraph>
<Paragraph>
    <p>
        As you can see, it came out pretty terrible. 
        Some buttons don't work, the colors are awful, the menu does not look good at all, but atleast you can switch between languages right?
    </p>
</Paragraph>
<Undertitle title="Version 2.0" />
<Paragraph>
    <p>
        This time i wanted to change it up. I wanted to make it mine.
        So i took some inspiration from one of my favorite games, Minecraft.
        I started with the most basic things, a front page with some information about me and the layout.
    </p>
</Paragraph>
<Paragraph>
    <p>
        In the start i wanted to use every text color in Minecraft. 
        They have 4 main text colors that represent the rarity of an item. 
        The colors are white, yellow, cyan and pink.
        For me, who is terrible at design, these colors were extremely hard to use together.
        So i decided to only use the blocky design instead, and i belive it turned out well enough.
    </p>
</Paragraph>
<Paragraph>
    <p>
        I also wanted somewhere to list all of my hardware and to write down and show off my projects.
        The problem was that my frontpage already had a lot of information, so i could'nt really fit it there.
        So i made a menu. In the start it looked terrible, i had no idea where to put it and anywhere i put it looked wrong.
        Changes to the layout had to be made to fit it in somewhere.
        And it soon found a permanent home below my name.
    </p>
</Paragraph>
<Undertitle title="The blog and Hardware list" />
<Paragraph>
    <p>
        The first thing i made was a wishlist page. 
        Mostly because it was closing in on christmas and my mom asked me for one, but also because i thought it would be more fun than a piece of paper.
    </p>
</Paragraph>
<Paragraph>
    <p>
        Since i am kind of lazy, all i did was reuse the same component i made for my experience and education section. 
        It was easy, it looked alright and it was'nt really that important anyways.
    </p>
</Paragraph>
<Paragraph>
    <p>
        So when i made the route for all my hardware and my home office setup, i chose the lazy way again and copied my wishlist.
    </p>
</Paragraph>
<Paragraph>
    <p>
        Unfortunetly it did'nt really work out when i made the Blog route.
        Here i had to come up with something new, is what i first thought atleast.
        I'm still just as lazy, so i just reused the box from the small section under my name on the front page and added some small changes to it.
        However, the actual page with the blogpost was harder to just copy & paste.
        At first i began thinking about using a cms, like sanity, but quickly decided that plain and simple was easier and faster (I might still add it later as another side project).
        So i began looking for inspiration, mostly at blogs that were already established, but none really fit my theme.
        Therefore i just stole some of the different components and designed my own blog around them.
    </p>
</Paragraph>
<Undertitle title="How it came out" />
<Paragraph>
    <p>
        Personally i believe it came out surprisingly well. 
        It fits me and my personality, and serves the intended purpose of a personal playground that i can show off.
        The project might be a life long one, with multiple iterations, but so far, im really proud of it.
        As i keep learning and figure things out, i'll keep coming back to this to test and have fun.
    </p>
</Paragraph>
<Paragraph>
    <p>
        It's definetly a project for anyone and everyone to try out and have fun with.
        You can of course check out the <a class=" underline text-yellow-500" target="_blank" href="https://github.com/ErikAndreasKlokk/Portfolio">github repo</a> and even fork it if you want to, but i really do believe that creating your own gives you a lot more.
    </p>
</Paragraph>