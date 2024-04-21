import React from "react";
import './App.css';

import d from './data.json';

const Photo = (props) => {
    const hex = props.item.color;
    var align;
    if(props.item.orientation === 0) {align = "left";}
    else if(props.item.orientation === 2) {align = "right";}
    else if(props.item.orientation === 1) {align = "center";}
    if(props.item.orientation === 0) {
        return(
            <div className="photo-block" style={{display: props.disp, backgroundColor: hex}}>
                <div className="image-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle"}} className="photo" alt = ":("></img>
                    <div style={{padding: "50px"}} dangerouslySetInnerHTML={{__html: props.item.statement}}></div>
                </div>
                <div dangerouslySetInnerHTML={{__html: props.item.id}} style={{textAlign: align}}></div>
            </div>
    );} else if (props.item.orientation === 1) {
        return (
            <div className="photo-block" style={{display: props.disp, backgroundColor: hex, textAlign: align}}>
                <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle"}} className="photo" alt = ":("></img>
                <div dangerouslySetInnerHTML={{__html: props.item.id}} style={{textAlign: align}}></div>
            </div>
    );} else {
    return(
        <div className="photo-block" style={{display: props.disp, backgroundColor: hex}}>
            <div className="image-grid" style={{gridTemplateColumns: "2fr 1fr"}}>
                <div style={{padding: "50px"}} dangerouslySetInnerHTML={{__html: props.item.statement}}></div>
                <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle", textAlign: "right"}} className="photo" alt = ":("></img>
            </div>
            <div dangerouslySetInnerHTML={{__html: props.item.id}} style={{textAlign: align}}></div>
        </div>
    );}
}

const Essay = (props) => {
    return(
        <div id="essay-block" style={{display: props.disp}}>
    <p class="c18"><span class="c4">Paul Pfeiffer&rsquo;s Masterful Social Commentary Is Not About the Art</span></p>
    <p class="c10"><span class="c0">Prologue to the Story of the Birth of Freedom</span><span class="c1">&nbsp;by Paul
            Pfeiffer, currently installed at MOCA Geffen, asks viewers to contemplate themes of fame, image, and sports
            culture. Pfieffer is an artist who is mainly known for manipulating found footage, editing archival photos,
            and playing with perspective to add to or completely change the narrative of the media. This exhibition,
            through room composition, artwork positioning, and manipulation of the senses, successfully integrates
            Pfeiffer&rsquo;s work into physical spaces. In fact, it is these components that make it possible for the
            nuanced meanings in Pfeiffer&rsquo;s works to come across for the viewer, not the media used in those
            spaces. </span></p>
    <p class="c10"><span class="c1">For the exhibition as a whole, the first thing to note is the floor plan is very
            open and doesn&rsquo;t explicitly direct the viewer down any specific path. The map given organizes the
            rooms into letters, suggesting a correct sequence to view the art, even if certain room orders seem
            unintuitive (picking room E over J, or going counterclockwise around the center H-N exhibits instead of
            clockwise - see appendix for the exhibit&rsquo;s floor plan). But, the suggestion of a &ldquo;correct&rdquo;
            viewing order indicates that a story is built upon through each room, and requires in-person viewing to
            understand what Pfeiffer is trying to say.</span></p>
    <p class="c10"><span class="c4">The first space</span><sup><a href="#cmnt1" id="cmnt_ref1">[a]</a></sup><span
            class="c4">&nbsp;I&rsquo;d like to discuss from the exhibit is the one holding </span><span class="c0">The
            Saints</span><span class="c1">&nbsp;(2007, room O). It is a massive white room with a ring of speakers,
            playing out the audio from the 1966 World Cup match between England and West Germany. The overly intense
            crowd noises, elevated from the number of speakers and echo of the room, play with the listener&rsquo;s
            senses and allow them to feel as if they are there in the crowd - even if they have no idea what crowd they
            are a part of. It is a stark contrast, then, to the tiny LCD screen on the wall, showing a single player on
            the field and no one else. Pfeiffer uses the large space and the tiny media to commentate on crowd culture,
            demonstrating who is the watcher and who is being watched. Though the &ldquo;artwork&rdquo; is technically
            the LCD screen with soccer footage, or even the video of the crowd projected on a hidden wall, the room
            composition is an integral part of the installation as it is what makes the meaning of the work.</span></p>
    <p class="c10"><span class="c4">He doe</span><sup><a href="#cmnt2" id="cmnt_ref2">[b]</a></sup><span class="c4">s
            this in a different way with </span><span class="c0">Three Figures in a Room</span><span
            class="c4">&nbsp;(2015&ndash;18, room D), displaying &ldquo;the fight of the century&rdquo; between Floyd
            Mayweather and Manny Pacquiao. The room is soundproof, with the only noises heard by the viewer being the
            shuffling of feet, heavy breathing, and grunting from the video before them. However, there&rsquo;s a second
            video displayed as well, revealing that the audio wasn&rsquo;t just isolated from the video and heightened
            for the viewer, but entirely recreated from a sound studio. The sounds of the recreation completely surround
            the audience, dipping in and out as the figures go on and off screen, and allow for a deeply immersive
            experience. The room is set up with little rows to sit, and one might think that </span><span
            class="c0">Three Figures</span><span class="c1">&nbsp;refers to the two boxers and the viewer. However,
            Pfeiffer instead highlights the roles of the referee and the editor in their respective videos, how they are
            seemingly invisible participants but actually play a major role in the experience shown in the media. This
            manipulation of the senses, through the all-surrounding audio and closed-in, immersive feeling is what
            allows the point of the exhibit to come through. Even the little seating area for people to sit and watch
            adds to the experience that Pfeiffer deliberately designed for the viewer. The installation would mean much
            less if it was displayed in an open room, with less soundproofing, or even if the volume of the video was
            quieter.</span></p>
    <p class="c10"><span class="c4">There</span><sup><a href="#cmnt3" id="cmnt_ref3">[c]</a></sup><span
            class="c1">&nbsp;were many ways that Pfieffer also used the positioning of the artworks to convey a specific
            message. This is best shown through his installation of Incarnator (2018&ndash;22, room H). It is a
            multimedia display focused on a realistic carving of Justin Beiber, sliced into various body parts with
            remnants of Christian theming. Together, the modeled body parts form an image of Christ on the cross,
            representing the idolization of famous people. Apart, they look almost grotesque, asking the viewer to
            contemplate the issues with fame, image, and celebrity obsession. Every time this work is installed in a
            museum or gallery, it is displayed differently in the space, and this allows it to take on different
            meanings depending on the positioning of the pieces. While the carvings themselves are highly detailed and
            speak to Pfeiffer&rsquo;s proficiency in different mediums, the pieces alone don&rsquo;t tell the story he
            wants to convey. </span></p>
    <p class="c10"><span class="c4">It </span><sup><a href="#cmnt4" id="cmnt_ref4">[d]</a></sup><span class="c4">could
            be argued that the room design, art layout, and sensory composition of the exhibits only add to the meaning
            of the works instead of fully shaping them. However, attempting to imagine his pieces outside of their
            intended spaces ends up removing the spectacle and grandeur that they were designed to portray. The video
            tracking the quick movements of a basketball (</span><span class="c0">John 3:16</span><span class="c4">,
            2000, room A) would not be as impactful if it wasn&rsquo;t installed at the height of a basketball hoop. The
            model of a massive stadium that could hypothetically hold one million people (</span><span
            class="c0">Vitruvian Figure</span><span class="c4">, 2008, room G) wouldn&rsquo;t feel as grand and imposing
            if it did not require the viewer to slowly circle it upwards until they were looking at it from a bird&#39;s
            eye view. Even the rooms that model traditional museum galleries (</span><span class="c0">Four Horsemen of
            the Apocalypse</span><span class="c4">, 2000, room J, as well as </span><span class="c0">24
            Landscapes</span><span class="c1">, 2000/2008, room R) are purposely placed where they are in the proposed
            walking order to throw the viewer off balance, to simulate something familiar with images that, on closer
            look, are actually wildly unsettling.</span></p>
    <p class="c10"><span class="c4">Overall, I believe that </span><span class="c0">Prologue</span><span
            class="c4">&nbsp;successfully captured the essence of Pfeiffer&rsquo;s work, using creative space design and
            playing with the viewer&rsquo;s senses to convey the many facets of his social commentary. The idea that
            space adds to or controls the narrative of the media is a running theme in all of Pfeiffer&rsquo;s exhibits
            and is done so very well here. It&rsquo;s not very common in this day and age for art to require an
            in-person perspective to truly understand what the artist is trying to say. After all, we&rsquo;re so used
            to simply pulling up Google if we want to see a famous painting or even a virtual walkthrough of an entire
            museum. Pfeiffer&rsquo;s work challenges this accessibility and need for online preservation by making the
            space part of the art. And that itself plays very well into his commentary on fame, image, and internet
            culture today.</span></p>
        </div>    
    );
}

const Citations = (props) => {
    return(
        <div id="citation-block" style={{display: props.disp}}>
            citations!
        </div>    
    );
}

const Teleport = () => {
    return(
        <div id="teleport">asdasda</div>
    );
}

const App = () => {
    const [data, setData] = React.useState([]); //writing, citations, button text vv
    const [display, setDisplay] = React.useState(["block", "none", "citations"]);
    React.useEffect(() => {
        setData(d.photos);
    }, []);
    //console.log(data);
    const teleport = document.getElementById('teleport');
    const handleScroll = (e) => {
        const top = teleport.getBoundingClientRect().top;
        const essayheight = document.getElementById('essay-block').offsetHeight
        if(top < 0) {document.getElementById("container").scrollTop = essayheight +50;}
    };
    const changeDisplay = (e) => {
        e.preventDefault();
        const text = (display[2] === "citations") ? "exhibition" : "citations";
        setDisplay([display[1], display[0], text]);
    }
    return (
        <div id="container" style={{overflowY: "scroll", scrollbarWidth: "none"}} onScroll={handleScroll}>
            <button id="changedisplay" onClick={changeDisplay}>display {display[2]}</button>
            <Citations disp = {display[1]}/>
            <Essay disp = {display[0]}/>
            {data.map((item,i) => {return(<Photo key= {i} item = {item} disp = {display[0]}/>)})}
            <Teleport/>
            {data.map((item,i) => {if(item.duplicated) {return(<Photo key= {i+10} item = {item} disp = {display[0]}/>)}else{return(<div key= {i+10}></div>)}})}
        </div>
    );
}

export default App;