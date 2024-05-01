import React from "react";
import './App.css';

import d from './data.json';

const Photo = (props) => {
    const hex = props.item.color;
    var align;
    if(props.item.orientation === 2) {align = "left";}
    else if(props.item.orientation === 0) {align = "right";}
    else if(props.item.orientation === 1) {align = "center";}
    const statement = (!props.dupe) ? props.item.statement : props.item.statement.replace("ftnt_ref", "");
    if(props.item.orientation === 2) {
        return(
            <div className="photo-block" style={{display: props.disp, backgroundColor: hex}}>
                <div className="image-grid" style={{gridTemplateColumns: "1fr 2fr"}}>
                    <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle"}} className="photo" alt = ":("></img>
                    <div style={{padding: "50px"}} dangerouslySetInnerHTML={{__html: statement}}></div>
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
                <div style={{padding: "50px"}} dangerouslySetInnerHTML={{__html: statement}}></div>
                <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle", textAlign: "right"}} className="photo" alt = ":("></img>
            </div>
            <div dangerouslySetInnerHTML={{__html: props.item.id}} style={{textAlign: align}}></div>
        </div>
    );}
}

const Essay = (props) => {
    return(
        <div id="essay-block" style={{display: props.disp}}>
            <p class="title"><i>Unseen, Untouched</i>: Honoring the Hidden Records of the AIDS Crisis</p>
            <p class="c12">This exhibition, titled <span class="c6 c8">Unseen, Untouched</span>, pulls together many of the
                    lesser-known photos from the height of the AIDS epidemic in order to reframe the common perceptions of
                    people living through the crisis. The most popular, recognizable images from the
                    epidemic are the ones featuring frail bodies, hospital beds, and weeping families. Most of the photography coming out of the height of the crisis
                    was either medical or political in nature; documenting the disease or publicly fighting for its visibility. Of course, the third (and unfortunately most popular)
                    use for photography was in the obituary section of local newspapers. However, what is often overlooked in
                    the grand archive of photos from this era is the everyday person. The human before the disease. The
                    people simply living their lives, navigating a brand new
                    world of misinformation and terror. So often photographers would focus too much on the virus itself, or even
                    the person's identity as a way to spread knowledge or fear - depending on their angle. This exhibition
                    attempts to gather various personal photos and lesser-known journalistic images from the height of the media
                    coverage of the AIDS crisis - from 1985 to 1995 - to paint a larger picture of the real people affected by
                    the epidemic, and to display the sadness, anger, and joy of those living in this tumultuous time.</p>
            <p class="c12">The AIDS crisis was a period in the late 1980s and '90s of
                    mass hysteria and fear over HIV (human immunodeficiency viruses) and the subsequent disease, AIDS (acquired
                    immunodeficiency syndrome). HIV is mainly transmitted by sharing needles or having unprotected sex with an
                    infected person, but also from blood transfusions or from mother to child. It causes the infected person to
                    lose immunity to diseases over many years, eventually resulting in rare illnesses and death. The disease was
                    first acknowledged in the United States in 1981, though it had already been around in other parts of the
                    world for longer. At first, it was thought to be a rare cancer and only infected gay men. By 1982, there
                    were also a few cases of hemophiliacs, women, and children with the mysterious illness, but the majority of
                    patients were still queer men. Over the next decade, through the inaction of the government, diagnoses and
                    deaths grewdrastically, with 161,000 cases and 120,500
                    deaths reported by the end of 1990. Once Clinton became
                    president in 1993, the government slowly started working for the people and enacting positive changes. By
                    1996, the media coverage of the epidemic began to decrease significantly. That was also the year that
                    combination therapy became available for patients, causing deaths to decline drastically compared to
                    previous years.<sup class="c6"><a href="#ftnt1"
                        id="ftnt_ref1">[1]</a></sup>At this point, it could be said that the
                    &ldquo;crisis&rdquo; was over, though the pandemic itself has certainly never ended.</p>
            <p class="c12">Photography&rsquo;s involvement
                    in the AIDS epidemic, as stated previously, has largely been about documenting the medical phenomenon and
                    the developments of the disease, as well as political activism posters to spread awareness. Nicholas Nixon, 
                    for example, had an exhibition installed at MoMA in 1988
                    which included many photos of men dying from AIDS. While this did draw attention to the crisis, many
                    criticized the objectification of the subjects being displayed as they were, as well as the continuation of
                    harmful stereotypes.<sup class="c6"><a href="#ftnt2" id="ftnt_ref2">[2]</a></sup>&nbsp;Images of dying patients were also widely circulated
                    to drum up fear, and eventually sympathy, for people with the disease.<sup class="c6"><a href="#ftnt3" id="ftnt_ref3">[3]</a></sup> On
                    the other end of the spectrum, photography was often used to make political statements, through posters and
                    other forms of activism. The more famous images are from the group ACT UP, an organization dedicated to
                    fighting the government for visibility on the epidemic. Their posters included advertising kiss-ins to
                    protest discrimination, commenting on the pope and the Catholic church with an image of a penis, and
                    edits of Ronald Reagan's face to speak on the government's inaction.&nbsp;They all have a very distinct aesthetic and are some of the most recognizable symbols of
                    the crisis and the fight for visibility.<sup class="c6"><a href="#ftnt4" id="ftnt_ref4">[4]</a></sup></p>
            <p class="c12">This exhibition hopes to combat
                    these stereotypes of photography during the AIDS crisis, as well as challenge common perceptions of the
                    people themselves as subjects of the photos. It will do this from many different angles. First, the idea
                    that only gay men could get AIDS was incredibly prevalent during the height of the crisis&rsquo;s media
                    coverage. It was the news and the government&#39;s &nbsp;greatest weapon
                    against gay people, and therefore the LGBTQ+ rights movement and the AIDS healthcare movement were almost
                    one and the same. This exhibition chooses to honor those identities through some of the photos, but also
                    intentionally pushes back against that &ldquo;stereotypical AIDS victim.&rdquo; Included are images of
                    women and children, &nbsp;whose lives were all upended as a result of this
                    disease. They are the ones the media ignored in favor of a group more easily shunned and victimized. <span class="c8">Unseen, Untouched</span> also includes multiple lesser-known
                    images of the anger and protests resulting from the government&#39;s lack of attention and care on the
                    crisis. Many could perhaps recognize the posters of kiss-ins and other propaganda pieces put up by ACT UP.
                    It was much more difficult to find widespread coverage of the physical protests occurring during the time.
                    These images are powerful and tell an important narrative of how change was fought for during the crisis.
                    They deserve that space, and this exhibition aims to give them one. Finally, the most prominent subject of
                    photography during the time was the dying patient, as mentioned above. While the AIDS epidemic garnered much
                    fear, hatred, and sadness through the late '80s 
                    and '90s, there were also beautiful moments that deserve to be appreciated.</p>
            <p class="c12"><span class="c8">Unseen, Untouched</span>&nbsp;will have images of the
                    implication of death, those whose passing is rarely acknowledged in relation to AIDS. It will display photos
                    of anger, rage, and all the emotions the government and media refused to listen to. It will also include
                    snapshots of the good moments, the happy moments, to push the viewer to see beyond the disease and
                    understand the subject. The exhibition is loosely divided into those three parts:
                    sadness, anger, and joy. The lines between the categories are incredibly blurry, and the images are
                    organized so the individual themes overlap quite a bit. If it ever made it to a physical space, a pop-up
                    room by the NYC AIDS Memorial would be the ideal location. The room design would be circular so the viewer
                    can walk around the space and get a sense of all sides of the story being told, without feeling like there
                    is a necessary start and finish. Of course, the images will be ordered such that it feels intuitive to find
                    a beginning and end to the story the works are telling, but it&rsquo;s more symbolic of the crisis as a
                    whole and how all the subthemes are intertwined. While attempting to realize a physical space for the chosen
                    works would be highly difficult, this exhibition has been designed for an online space as the final project 
                    for the <i>History of Photography</i> (AHIS 373) course at the University of Southern California (curated and programmed by 
                    Emma Trzupek). It features an endless scroll mechanic to mimic walking around the physical space over and over. As a result 
                    of this mechanic, all endnotes will be right below to preseve that effect. The full bibliography may be found at the link at
                    the top of the page.</p>
        </div>    
    );
}

const Footnotes = (props) => {
    return(
        <div id="footnote-block" style={{display: props.disp}}>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref1" id="ftnt1">[1]</a><span class="c16 c10">&nbsp;&ldquo;HIV/AIDS
                        Timeline,&rdquo; New York City AIDS Memorial, accessed April 25, 2024,
                        https://www.nycaidsmemorial.org/timeline.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref2" id="ftnt2">[2]</a><span class="c10">&nbsp;Sarah Schulman, </span><span
                        class="c8 c10">Let the Record Show: A Political History of ACT UP New York</span><span class="c16 c10">,
                        1987-1993 (New York: Picador&#8239;; Farrar, Straus and Giroux, 2021), ch 11.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref3" id="ftnt3">[3]</a><span class="c10">&nbsp;Lukas Engelmann,
                        &ldquo;Photographing AIDS: On Capturing a Disease in Pictures of People with AIDS,&rdquo; </span><span
                        class="c8 c10">Bulletin of the History of Medicine</span><span class="c16 c10">&nbsp;90, no. 2 (2016):
                        250&ndash;78, https://doi.org/10.1353/bhm.2016.0053.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref4" id="ftnt4">[4]</a><span class="c10">&nbsp;Avram Finkelstein, </span><span
                        class="c8 c10">After Silence: A History of AIDS through Its Images</span><span
                        class="c16 c10">&nbsp;(Oakland, California: University of California Press, 2018), 125-135.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref5" id="ftnt5">[5]</a><span class="c16 c10">&nbsp;Lauren Russell, &ldquo;When
                        HIV Was a Death Sentence,&rdquo; CNN, April 19, 2016,
                        https://www.cnn.com/2015/11/30/health/cnnphotos-hiv-aids-portraits/index.html.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref6" id="ftnt6">[6]</a><span class="c16 c10">&nbsp;Russell, &ldquo;When HIV
                        Was a Death Sentence.&rdquo;</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref7" id="ftnt7">[7]</a><span class="c10">&nbsp;Finkelstein, </span><span
                        class="c8 c10">After Silence</span><span class="c10">, </span><span class="c16 c10">136.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref8" id="ftnt8">[8]</a><span class="c10">&nbsp;Schulman, </span><span
                        class="c8 c10">Let the Record Show</span><span class="c16 c10">, introduction.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref9" id="ftnt9">[9]</a><span class="c10">&nbsp;Billy Howard, </span><span
                        class="c8 c10">Epitaphs for the Living: Words and Images in the Time of AIDS</span><span
                        class="c16 c10">&nbsp;(Dallas: Southern Methodist University Press, 1989).</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref10" id="ftnt10">[10]</a><span class="c10">&nbsp;Thomas McGovern,
                    </span><span class="c8 c10">Bearing Witness (to AIDS)</span><span class="c16 c10">&nbsp;(New York, NY:
                        Visual AIDS, 1999), 3.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref11" id="ftnt11">[11]</a><span class="c16 c10">&nbsp;Sharon M. Day,
                        &ldquo;The Untold Story of Women and Indigenous Communities in the Aids Crisis,&rdquo; PBS, March 29,
                        2023,
                        https://www.pbs.org/wnet/americanmasters/the-untold-story-of-women-and-indigenous-communities-in-the-aids-crisis/26459/.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref12" id="ftnt12">[12]</a><span class="c16 c10">&nbsp;David Zwinrer,
                        &ldquo;More Life - Silence=Death.&rdquo; Accessed April 29, 2024.
                        https://www.davidzwirner.com/exhibitions/2021/more-life/silence-equals-death.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref13" id="ftnt13">[13]</a><span class="c10">&nbsp;Schulman, </span><span
                        class="c8 c10">Let the Record Show</span><span class="c16 c10">, ch 2.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref14" id="ftnt14">[14]</a><span class="c10">&nbsp;ACT UP. &ldquo;A National
                        AIDS Treatment Research Agenda&rdquo;, ACT-UP Golden Gate Records, 1988-1993. </span><span
                        class="c10">https://calisphere.org/item/ark:/81983/s98d1x/.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref15" id="ftnt15">[15]</a><span class="c10">&nbsp;Schulman, </span><span
                        class="c8 c10">Let the Record Show</span><span class="c16 c10">, ch 2.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref16" id="ftnt16">[16]</a><span class="c16 c10">&nbsp;Margaret Winslow,
                        &ldquo;Silence = Death,&rdquo; Delaware Art Museum, April 6, 2021,
                        https://delart.org/silence-death/.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref17" id="ftnt17">[17]</a><span class="c16 c10">&nbsp;Winslow, &ldquo;Silence
                        = Death&rdquo;.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref18" id="ftnt18">[18]</a><span class="c16 c10">&nbsp;Taro Yamasaki,
                        &ldquo;Ryan White&rdquo;. Accessed April 27, 2024. https://taroyamasaki.com/ryan-white-5/.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref19" id="ftnt19">[19]</a><span class="c16 c10">&nbsp;Yamasaki, &ldquo;Ryan
                        White&rdquo;.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref20" id="ftnt20">[20]</a><span class="c16 c10">&nbsp;The New York Times.
                        &ldquo;Loss and Bravery: Intimate Snapshots From the First Decade of the AIDS Crisis.&rdquo; December 1, 2018, sec. Health.
                        https://www.nytimes.com/2018/12/01/health/aids-day-photography-1980s.html.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref21" id="ftnt21">[21]</a><span class="c16 c10">&nbsp;Jane Gross. &ldquo;A
                        Life Defiant, Despite AIDS.&rdquo; The New York Times, January 25, 1988, sec. New York.
                        https://www.nytimes.com/1988/01/25/nyregion/a-life-defiant-despite-aids.html.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref22" id="ftnt22">[22]</a><span class="c10 c16">&nbsp;Matthew Leifheit,
                        &ldquo;A Chance Encounter with Mark Morrisroe,&rdquo; Aperture, November 15, 2016,
                        https://aperture.org/editorial/mark-morrisroe/.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref23" id="ftnt23">[23]</a><span class="c16 c10">&nbsp;Leifheit, &ldquo;A
                        Chance Encounter with Mark Morrisroe&rdquo;.</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref24" id="ftnt24">[24]</a><span class="c10">&nbsp;Nan Goldin, </span><span
                        class="c8 c10">The Ballad of Sexual Dependency</span><span class="c16 c10">&nbsp;(New York: Aperture,
                        1986).</span></p>
            </div>
            <div>
                <p class="c2 c25"><a href="#ftnt_ref25" id="ftnt25">[25]</a><span class="c16 c10">&nbsp;&ldquo;The Cookie
                        Portfolio,&rdquo; Sotheby&rsquo;s, accessed April 27, 2024,
                        https://www.sothebys.com/en/buy/auction/2023/photographs-3/cookie-mueller.</span></p>
            </div>
        </div>
    );
}

const TEST = (props) => {
    return(
        <div style={{display: props.disp}}>
            <p class="c12">Children are never the first thing that comes to mind when thinking about the AIDS crisis (and
            it is the first photo in this exhibition for that reason). Billy Howard hoped to shed light on those
            suffering from the disease, all from different walks of life. He allowed each subject to write a small blurb
            about their experience living with AIDS and published those writings in his book along with their portraits.
            All of his images were aesthetically composed, and he worked very closely with each subject to represent
            their being as truthfully as possible. This also purposely pushed back against the stereotypical AIDS
            patient, even though by the time it was printed, 18 of the subjects (out of 80) had
            passed.<sup><a href="#ftnt5" id="ftnt_ref5">[5]</a></sup></p>
    <p class="c12">This book/project had a very small audience at the time, and these images were not widespread
            in the slightest. The only image from the project that was circulated was the first one Howard took, ending
            up in a local Atlanta newspaper. For this chosen photo, it would have been very powerful to show the world
            what someone with AIDS could be. Because of the idea that it was a &ldquo;gay disease&rdquo; (and health
            care providers at the beginning of the crisis would diagnose people with &ldquo;Gay-Related Immune
            Deficiency, or GRID) the images in Howard&rsquo;s book serve as a wake-up call to that mentality, even if
            the ones who needed to see it the most turned a blind eye. And Howard himself believes that the change in
            acceptance over the years is mainly from &ldquo;the public learning more about people with the disease
            through media and personal stories.&rdquo;<sup><a href="#ftnt6" id="ftnt_ref6">[6]</a></sup></p>
            
            <br/><br/><br/><br/>

    <p class="c12">If there was any confusion about children contracting HIV, it stemmed primarily from the stigma
            around women and AIDS. Women were not considered in conversations around AIDS for almost a decade since the
            initial outbreak because it was thought to be a gay disease. But women could have sex with men who&rsquo;re
            HIV positive, and get infected themselves. The other main way of infection was through intravenous drug
            needles, which was also highly stigmatized at the time. To combat this, the most prominent activist group,
            ACT UP, put out propaganda posters stating &ldquo;Women don&rsquo;t get AIDS, they just die from
            it.&rdquo;<sup><a href="#ftnt7" id="ftnt_ref7">[7]</a></sup>&nbsp;They also
            &ldquo;ran a four-year campaign to change the U.S. Centers for Disease Control&rsquo;s definition of AIDS so
            that women could get access to benefits and be included in experimental drug
            trials.&rdquo;<sup><a href="#ftnt8" id="ftnt_ref8">[8]</a></sup>
            &nbsp;This was because women and intravenous drug users weren&rsquo;t included in the initial
            definition of AIDS, so clinical trials and research also did not include them.</p>
    <p class="c12">Billy Howard took photos of many women for his book, wanting to represent as many identities as
            possible in his project. Juanita, as part of her epitaph, says &ldquo;Looking at me in this picture
            can&#39;t tell you I&#39;m a very sick person. I can&#39;t believe it
            myself.&rdquo;<sup><a href="#ftnt9" id="ftnt_ref9">[9]</a></sup>
            &nbsp;This text is juxtaposed with an image on the other page of her using a medical device,
            something Howard tended to stray away from. He liked to display his subjects as healthy and happy as
            possible, yet he still allowed her to include another photo to show the reality of her situation. </p>
            
            <br/><br/><br/><br/>

    <p class="c12">All of the photos Thomas McGovern took of the crisis have the careful attention of
            someone not just documenting events and lives, but honoring them through art. He states in the forward of
            his book that &ldquo;I have come to feel that the stories I am told and the pictures that I make are
            precious objects and mementos of a rapidly changing time and place. My role has shifted from documentarian
            to historian and from observer to caretaker.&rdquo;<sup class="c6"><a href="#ftnt10"
                id="ftnt_ref10">[10]</a></sup>&nbsp;His shots are aesthetically and
            carefully composed to capture the subject and their experiences. But along with
            breaking stereotypes and honoring people with AIDS through portraiture, he also covered the protests and
            outrage at the government&rsquo;s negligence. These images are much more uncomfortable for the average
            viewer, despite the aesthetics that carry over from McGovern&rsquo;s portraiture work. </p>
    <p class="c12">The above image is powerful even without context. Jon Greenberg, the man whose
            funeral was held publicly in the streets as a demonstration, was an integral member of the ACT UP group that
            fought for visibility on the AIDS crisis. He was a major public figure in the movement, and his death was
            purposely publicized (though still not widely known) to make a point. This specific event was designed to
            make onlookers uncomfortable, to display the government&rsquo;s ignorance with a body that had been directly
            killed by their inaction. This image never made it to any newspaper and the event didn&rsquo;t gather
            nationwide attention, but it still speaks to the core issue for AIDS activism: visibility.</p>
            
            <br/><br/><br/><br/>

    <p class="c12">The 1988 Democratic National Convention was an incredibly important moment in the
            AIDS crisis, at least at the time. Reagan&rsquo;s last term was ending and everyone was more than ready to
            elect someone into office who could potentially enact change for the better. They even had Keith Gann, a gay
            man living with AIDS, address the national convention. Of course, Bush ended up winning the election
            that year, but this event still gave much-needed publicity to the crisis.
            Sort of. Activist Sharon Day wrote about her experience at the DNC, saying &ldquo;A few of us [Indigenous
            Peoples Task Force] delegates marched blocks carrying panels from the AIDS quilt. We were met a block away
            from the convention center by a SWAT team of police officers all dressed in black.
            &rdquo;<sup class="c6"><a href="#ftnt11" id="ftnt_ref11">[11]</a></sup>
            &nbsp;While it&rsquo;s uncertain whether this is the same group featured in the photo
            above, it sends a powerful message nonetheless. This image was not
            published in any newspapers or media outlets and had very little circulation. Especially in the shadow of
            the presidential election and a tense political climate, no paper was going to run a story on an issue that
            neither side was fully supporting.</p>
        <p class="c12">Binder was no stranger to the
                lack of attention towards her work, however. She founded a photo agency dedicated to social documentary
                photography, called Impact Visuals, and worked hard to get her images and others&rsquo; out into the public
                space.<sup class="c6"><a href="#ftnt12" id="ftnt_ref12">[12]</a></sup>
                &nbsp;She worked closely with ACT UP for many of their photo propaganda pieces, so her images
                still circulated, even if not for a wide audience.</p>
            
            <br/><br/><br/><br/>

    <p class="c12">t. l. litt, also known as Tracy Litt, was a very prolific
            photographer of the AIDS crisis, often in unconventional ways like court cases or meeting rooms. She also
            documented many protests and demonstrations, including ACT UP&rsquo;s involvement at the Fifth International
            AIDS Conference in Montreal. Because of a policy from Reagan banning people with AIDS from entering the
            country, any global meetings had to be organized outside of the United States.<sup><a
                href="#ftnt13" id="ftnt_ref13">[13]</a></sup>&nbsp;This also meant that there
            wasn&rsquo;t a lot of media coverage of this event, and none of Litt&rsquo;s photos made it to
            newspapers.</p>
    <p class="c12">At the time, the conference was only for researchers and doctors. Members from ACT UP fought
            for space to be heard at this conference, protesting on the stage, taking seats from other influential
            figures, and interrupting panels with prepared speeches. There they also released a treatment research
            agenda hoping to accomplish many things: pitch a new system for drug testing, redesign clinical trials, and
            bring to light the demands of the communities affected.<sup><a href="#ftnt14"
                id="ftnt_ref14">[14]</a></sup>&nbsp;This was actually a major milestone in the AIDS crisis even if
            it didn&rsquo;t have good news coverage, because at the end of the conference, the FDA agreed to implement a
            parallel track for experimental AIDS drugs. This is when patients take the drugs as they&rsquo;re being
            developed, so researchers can use the results to better inform future iterations. They also used the
            proposal put together by ACT UP to guide that process, and named one of the writers to the commission
            organizing it, which was a huge step forward regarding community involvement in research and
            development.<sup><a href="#ftnt15" id="ftnt_ref15">[15]</a></sup></p>
            
            <br/><br/><br/><br/>

    <p class="c12">David Wojnarowicz was one of the most famous AIDS activists in the United States.
            His artwork has appeared in many galleries and museums since his death, including <span
            class="c8">Witnesses: Against Our Vanishing</span>&nbsp;curated by Nan
            Goldin. He died of complications from AIDS just 3 years after this photo was
            taken.</p>
    <p class="c12">Wojnarowicz worked with Sterzing to take this photo for the cover of the documentary
        <span class="c8">Silence = Death</span>. The documentary brought together multiple
            famous artists to advocate for AIDS visibility as a sort of social commentary. As an indie film, it
            didn&rsquo;t have an incredibly widespread circulation, at least not at the time. Additionally, this image
            was only a small portion of the cover of the film poster. Yet it has such a strong visual impact for the
            point it&rsquo;s trying to make. The image is meant to be jarring and uncomfortable, a visual representation
            of the government silencing people standing up for themselves and the good of the people. The implication of
            self harm, blood dripping from the wounds, and even the overly aesthetic composition of the shot all add to
            the narrative that is being conveyed. Wojnarowicz himself stated that &ldquo;I think what I really fear
            about death is the silencing of my voice. I feel this incredible pressure to leave something of myself
            behind.&rdquo;<sup class="c6"><a href="#ftnt16" id="ftnt_ref16">[16]</a></sup>
            &nbsp;While the image did not have a large audience when it was first taken, it has since been 
            circulated widely, even being named one of the most influential works of American protest art since WWII by the NYT 
            in 2020.<sup class="c6"><a href="#ftnt17" id="ftnt_ref17">[17]</a></sup></p>
                
            <br/><br/><br/><br/>

    <p class="c12">Ryan White was one of the most well-known faces of the AIDS crisis. A hemophiliac,
            he contracted AIDS from a contaminated blood transfusion when he was 13. He managed to live until 18,
            representing the struggles of all the people with AIDS who don&rsquo;t fit the stereotypes the media had
            been pushing. He became a national figure, but there weren&rsquo;t many
            widespread images of him and his daily life. His life, for the most part, was covered by two articles in
            People Magazine, his obituary in the New York Times, and a post-mortem piece also found in
            People. The most widespread coverage of his life was
            actually his funeral, which was broadcast on CNN for the world to see.
            <sup class="c6"><a href="#ftnt18" id="ftnt_ref18">[18]</a></sup>
            &nbsp;Taro Yamasaki took many photos of White for these articles, but the majority of the images
            that made it to print focused on the disease spreading in his body, not him living his life. At the time
            this made sense; the media wanted people to see a kid with this horrible illness, and to understand the
            epidemic and its effects from a point of view that would tug at people&rsquo;s heartstrings. </p>
    <p class="c12">This image, in particular, shows White simply going to school. It was not published
            in any major news outlet, though it&rsquo;s arguably one of the more important images of Yamasaki&rsquo;s
            collection. White had to transfer schools because of immense prejudice in his childhood hometown. &ldquo;In
            Kokomo when Ryan walked down a busy hall, all the other students &lsquo;hugged&rsquo; the opposite wall, as
            far from Ryan as possible.&rdquo;<sup class="c6"><a href="#ftnt19" id="ftnt_ref19">[19]</a></sup>&nbsp;Going 
            to a school and making friends was such a triumph for White, and those images deserve to be acknowledged.</p>
            
            <br/><br/><br/><br/>

    <p class="c12">Sara Krulwich, staff photographer at the New York Times, has had a lot of experience
            photographing people with AIDS. She says &ldquo;When someone [with AIDS] would actually let me take their
            picture, it was an act of enormous generosity, and I always felt very grateful. I hope they could feel that,
            because being a photographer is so secondary to being the kind of person that subjects can
            trust.&rdquo;<sup class="c6"><a href="#ftnt20" id="ftnt_ref20">[20]</a></sup>
            &nbsp;She worked closely with Robert Sanford to take
            photos for an article on the Lighthouse Music School for the Blind, discussing his life, experiences with
            AIDS, and perseverance through many difficulties.</p>
    <p class="c12">The viewers/consumers of this image should have been readers of the NYT in 1988,
            however, the article that features Sanford doesn&rsquo;t actually include this image.
            <sup class="c6"><a href="#ftnt21" id="ftnt_ref21">[21]</a></sup>
            &nbsp;Krulwich took two photos of Sanford that subsequently appeared in the 2018 NYT 30th
            anniversary article on the AIDS epidemic. The other is an image of Sanford sitting at home with his cat, a
            pensive, stoic look on his face. That photo&nbsp;is also the only one
            used in the 1988 article on Lighthouse; this image&nbsp;is omitted
            entirely. The joy on Sanford&rsquo;s face as he plays is arguably more important for the public to see than
            the melancholic photo&nbsp;of him at home. This image also shows him in
            public, surrounded by attentive listeners, doing an activity that he loves and that brings him joy despite
            such difficult circumstances. By omitting this photo from that article, the NYT missed a perfect opportunity
            to normalize people with AIDS in society as just people living their lives.</p>
            
            <br/><br/><br/><br/>

    <p class="c12">While much of this exhibit is focused on looking away from sexuality and focusing on the
            person, it&#39;s still important to acknowledge the queer people involved in the movement and their moments
            of happiness. &ldquo;Johnathan&rdquo; refers to Jack Pierson, who was Mark&rsquo;s
            boyfriend at the time, and John S is John Stefanelli, a frequent subject of Morrisroe&rsquo;s
            work.<sup class="c6"><a href="#ftnt22"
                id="ftnt_ref22">[22]</a></sup>&nbsp;This picture especially pushes back
            against &ldquo;the dying patient&rdquo; which was a very common stereotype of gay men during the crisis. It
            can actually be assumed that the subjects themselves did not contract HIV, given that Pierson is still alive
            and Stefanelli, though less involved in the public eye, was involved in a memorial book for Morrisroe in
            2013.</p>
    <p class="c12">It was Morrisroe who passed away from the disease in 1989. His signature style was
            dreamy, over-edited Polaroids that reflected&nbsp;his chaotic
            upbringing and wild nature. None of his photos were taken for exhibits or the public eye at all, and they
            have only recently gained some amount of fame after being found in a private home in Boston
            after 30 years.<sup><a href="#ftnt23" id="ftnt_ref23">[23]</a></sup> The images he
            took were for his friends, to record his point of view and experiences as honestly as he could. Many of his
            later works focus on his body&rsquo;s deterioration from AIDS, but of course, a more joyous image is
            appropriate here. It is one of only three color photos in this exhibition on purpose. Happiness is the most
            important, often forgotten emotion from the AIDS crisis. Here, those images are meant to be highlighted and
            stand out from the rest.</p>
            
            <br/><br/><br/><br/>

    <p class="c12">Cookie Mueller was a frequent subject of Nan Goldin&rsquo;s work, being featured
            both in <span class="c8">The Ballad of Sexual Dependency</span>&nbsp;as well as
        <span class="c8">The Cookie Portfolio</span>. This image, along with the rest of her
            portfolio, has been displayed multiple times in the 1990s in various exhibits
            .&nbsp;However, the circulation of these photos has been fairly small and
            not widespread. Most of Goldin&rsquo;s images were created featuring her friends, for her friends. While
            many of her pieces were incredibly activist-minded, her main motivation was candidly documenting her and her
            friends&rsquo; experiences in 1980s New York, navigating AIDS, drugs, abuse, and the ugly underground of the
            city.<sup class="c6"><a href="#ftnt24" id="ftnt_ref24">[24]</a></sup>&nbsp;Goldin
            herself stated &ldquo;I used to think I couldn&rsquo;t lose anyone if I photographed them enough. I put
            together this series of pictures from the hundreds I took of Cookie during the 13 years I knew her in order
            to keep her with me. In fact it shows me how much I&rsquo;ve lost.&rdquo;<sup class="c6"><a
                href="#ftnt25" id="ftnt_ref25">[25]</a></sup>&nbsp;Other images of Goldin&rsquo;s have
            appeared in art shows like <span class="c8">Witnesses: Against Our Vanishing</span>
            &nbsp;which she curated to show the effects of AIDS on different communities across the
            country.</p>
    <p class="c12">At the time of the wedding, both Mueller and Scarpati (her husband) were HIV
            positive due to using infected heroin needles. While they would both only live another three years before
            dying of AIDS, this photo celebrates the big, important moments of living that aren&rsquo;t ever
            traditionally associated with the epidemic. It also serves to push back against the common stereotype that
            only gay men can get AIDS, and that the only representation of infected individuals are in hospital beds
            wasting away. </p>
        </div>
    );
}



const Citations = (props) => {
    return(
        <div id="citation-block" style={{display: props.disp}}>
            <p class="c39 c25"><span class="c1">Bibliography</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">ACT UP. &ldquo;A National AIDS Treatment Research Agenda&rdquo; 1989. ACT-UP
                    Golden Gate</span></p>
            <p class="c2 c25 c29"><span class="c1">Records, 1988-1993. https://calisphere.org/item/ark:/81983/s98d1x/.</span>
            </p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Day, Sharon M. &ldquo;The Untold Story of Women and Indigenous Communities in the
                    AIDS Crisis&rdquo; </span></p>
            <p class="c2 c25 c29"><span class="c1">American Masters, PBS, March 29, 2023.</span></p>
            <p class="c2 c25 c29"><span
                    class="c1">https://www.pbs.org/wnet/americanmasters/the-untold-story-of-women-and-indigenous-c</span></p>
            <p class="c2 c25 c29"><span>ommunities-in-the-aids-crisis</span><span class="c1">/26459/.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Engelmann, Lukas. &ldquo;Photographing AIDS: On Capturing a Disease in Pictures
                    of People with</span></p>
            <p class="c2 c25 c29"><span class="c1">AIDS.&rdquo; Bulletin of the History of Medicine 90, no. 2 (2016):
                    250&ndash;78.</span></p>
            <p class="c2 c25 c29"><span class="c1">https://doi.org/10.1353/bhm.2016.0053.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Finkelstein, Avram. After Silence: A History of AIDS through Its Images. Oakland,
                    California:</span></p>
            <p class="c2 c25 c29"><span class="c1">University of California Press, 2018.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Goldin, Nan, Marvin Heiferman, Mark Holborn, and Suzanne Fletcher. The Ballad of
                    Sexual </span></p>
            <p class="c2 c25 c29"><span class="c1">Dependency. New York: Aperture Foundation, 1986.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Gross, Jane. &ldquo;A Life Defiant, Despite AIDS.&rdquo; The New York Times,
                    January 25, 1988, sec. New </span></p>
            <p class="c2 c25 c29"><span class="c1">York.
                    https://www.nytimes.com/1988/01/25/nyregion/a-life-defiant-despite-aids.html.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">&ldquo;HIV/AIDS Timeline.&rdquo; New York City AIDS Memorial. Accessed April 26,
                    2024. </span></p>
            <p class="c2 c25 c29"><span class="c1">https://www.nycaidsmemorial.org/timeline.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Howard, Billy. Epitaphs for the Living: Words and Images in the Time of AIDS. 1st
                    ed. Dallas: </span></p>
            <p class="c2 c25 c29"><span class="c1">Southern Methodist University Press, 1989.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Leifheit, Matthew. &ldquo;A Chance Encounter with Mark Morrisroe.&rdquo;
                    Aperture, November 15, 2016. </span></p>
            <p class="c2 c25 c29"><span class="c1">https://aperture.org/editorial/mark-morrisroe/.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">&ldquo;Loss and Bravery: Intimate Snapshots From the First Decade of the AIDS
                    Crisis.&rdquo; The New</span></p>
            <p class="c2 c25 c29"><span class="c1">York Times, December 1, 2018, sec. Health.</span></p>
            <p class="c2 c25 c29"><span
                    class="c1">https://www.nytimes.com/2018/12/01/health/aids-day-photography-1980s.html.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">McGovern, Thomas. Bearing Witness (to AIDS). New York, NY: Visual AIDS,
                    1999.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Russell, Lauren. &ldquo;When HIV Was a Death Sentence.&rdquo; CNN, April 19,
                    2016.</span></p>
            <p class="c2 c25 c29"><span
                    class="c1">https://www.cnn.com/2015/11/30/health/cnnphotos-hiv-aids-portraits/index.html.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Schulman, Sarah. Let the Record Show: A Political History of ACT UP New York,
                    1987-1993.</span></p>
            <p class="c2 c25 c29"><span class="c1">First edition. New York: Farrar, Straus and Giroux, 2021.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">&ldquo;The Cookie Portfolio.&rdquo; Sotheby&rsquo;s. Accessed April 27, 2024.
                </span></p>
            <p class="c2 c25 c29"><span
                    class="c1">https://www.sothebys.com/en/buy/auction/2023/photographs-3/cookie-mueller.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Winslow, Margaret. &ldquo;Silence = Death.&rdquo; Delaware Art Museum, April 6,
                    2021.</span></p>
            <p class="c2 c25 c29"><span class="c1">https://delart.org/silence-death/.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Yamasaki, Taro. &ldquo;Ryan White&rdquo;. Accessed April 27, 2024. </span></p>
            <p class="c2 c25 c29"><span class="c1">https://taroyamasaki.com/ryan-white-5/.</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c2 c25"><span class="c1">Zwirner, David. &ldquo;More Life - Silence=Death.&rdquo; Accessed April 29,
                    2024.</span></p>
            <p class="c2 c25 c29"><span
                    class="c1">https://www.davidzwirner.com/exhibitions/2021/more-life/silence-equals-death.</span></p>
            <p class="c0"><span class="c1"></span></p>
        </div>    
    );
}

const Teleport = () => {
    return(
        <div id="teleport"></div>
    );
}

const App = () => {
    const [data, setData] = React.useState([]); //writing, citations, button text vv
    const [display, setDisplay] = React.useState(["block", "none", "bibliography"]);
    React.useEffect(() => {
        setData(d.photos);
    }, []);
    //console.log(data);
    const teleport = document.getElementById('teleport');
    const handleScroll = (e) => {
        const top = teleport.getBoundingClientRect().top;
        const essayheight = document.getElementById('footnote-block').offsetHeight + document.getElementById('essay-block').offsetHeight;
        if(top < 0) {document.getElementById("container").scrollTop = essayheight +50;}
    };
    const changeDisplay = (e) => {
        e.preventDefault();
        const text = (display[2] === "bibliography") ? "exhibition" : "bibliography";
        setDisplay([display[1], display[0], text]);
    }
    return (
        <div id="container" style={{overflowY: "scroll", scrollbarWidth: "none"}} onScroll={handleScroll}>
            <button id="changedisplay" onClick={changeDisplay}>display {display[2]}</button>
            <Citations disp = {display[1]}/>
            {/* <TEST disp = {display[0]}/> */}
            <Essay disp = {display[0]}/>
            <Footnotes disp  = {display[0]}/>
            {data.map((item,i) => {return(<Photo key= {i} item = {item} disp = {display[0]} dupe = {false}/>)})}
            <Teleport/>
            {data.map((item,i) => {if(item.duplicated) {return(<Photo key= {i+10} item = {item} disp = {display[0]} dupe = {true}/>)}else{return(<div key= {i+10}></div>)}})}
        </div>
    );
}

export default App;