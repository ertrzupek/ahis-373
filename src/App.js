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
                    <div>
                        <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle"}} className="photo" alt = ":("></img>
                        <div dangerouslySetInnerHTML={{__html: props.item.id}} style={{textAlign: align}}></div>
                    </div>
                    
                    <div style={{padding: "50px"}} dangerouslySetInnerHTML={{__html: statement}}></div>
                </div>
                
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
                <div>
                <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle", textAlign: "right"}} className="photo" alt = ":("></img>
                    <div dangerouslySetInnerHTML={{__html: props.item.id}} style={{textAlign: align}}></div>
                </div>
                
            </div>
            
        </div>
    );}
}

const Essay = (props) => {
    return(
        <div id="essay-block" style={{display: props.disp}}>
            <p class="title"><i>Unseen, Untouched</i>: Honoring the Hidden Records of the AIDS Crisis</p>
            <p class="c1">This exhibition, titled <span class="c6 c8">Unseen, Untouched</span>, pulls together many of the
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
            <p class="c1">The AIDS crisis was a period in the late 1980s and '90s of
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
            <p class="c1">Photography&rsquo;s involvement
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
            <p class="c1">This exhibition hopes to combat
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
            <p class="c1"><span class="c8">Unseen, Untouched</span>&nbsp;will have images of the
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
            <p class="c2 c25 c29 c1"><span>ommunities-in-the-aids-crisis</span><span class="c1">/26459/.</span></p>
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
        <div>
            <div id="container" style={{overflowY: "scroll", scrollbarWidth: "none"}} onScroll={handleScroll}>
                <button id="changedisplay" onClick={changeDisplay}>display {display[2]}</button>
                <Citations disp = {display[1]}/>
                <Essay disp = {display[0]}/>
                <Footnotes disp  = {display[0]}/>
                {data.map((item,i) => {return(<Photo key= {i} item = {item} disp = {display[0]} dupe = {false}/>)})}
                <Teleport/>
                {data.map((item,i) => {if(item.duplicated) {return(<Photo key= {i+10} item = {item} disp = {display[0]} dupe = {true}/>)}else{return(<div key= {i+10}></div>)}})}
            </div>
            <div id="toosmall">sorry, your device is too small to display this page's contents :(</div>
        </div>
    );
}

export default App;