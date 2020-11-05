import React from "react";
import ImageCarousel from './ImageCarousel';
import BadgeCarousel from "./BadgeCarousel";
import { Link } from 'react-router-dom';



export default function CommissionsComponent() {
    return(
        <div className="commissionsContent">
            <h1 className={'twitchHeading'} style={{
                font: 'normal normal 800 2.025rem/2.75625rem Open Sans',
                color: 'var(--diviGrey)',
                letterSpacing: '5.4px',
                marginLeft: '58.0625rem'
            }}>TWITCH COMMISSIONS</h1>
            <h2 className={'subHeading'} style={{
                font: 'normal normal 500 1.6875rem/2.025rem Lato',
                letterSpacing: '1.5px',
                color: 'var(--diviGrey)',
                marginLeft: '66rem'}}>
                STATUS: <span style={{color: "var(--diviGreen)", fontWeight: 800}}>OPEN</span></h2>
            <hr className={'commissionsLine'} style={{
                position: 'relative',
                width: '86rem',
                marginLeft: '29.5rem',
                borderTop: '0.0625rem solid var(--diviBorder)',
                opacity: 0.5}}/>
            <div style={{
                 width: '666px',
                 marginLeft: '29.5rem',
                 marginTop: ''
                }}
               className={'commissionsBodyContent'}><p style={{
                   font: 'normal normal 500 1.875rem/2.475rem Lato',
                   color: 'var(--diviGrey)',
                   marginLeft: '2rem',
                   marginTop: '5rem',
                   display: 'relative'
            }}>TWITCH EMOTES <br/><span style={{
                color: 'var(--diviGreen)',
                fontWeight: 800
            }}>$30 USD EACH</span></p><p style={{
                font: 'normal normal normal 1.35rem/1.83125rem Lato',
                letterSpacing: '1.2px',
                marginLeft: '2rem',
                marginTop: '-1.75rem',
                color: 'var(--diviGrey)'
            }}>ESTIMATED COMPLETION TIME: <span style={{
                color: 'var(--diviRed)',
                fontWeight: 800}}>  3-6 days** (per emote) <br/> **Dependent on queue position in the schedule.</span>
               <br/><br/>INCLUDES: <ul style={{
                    marginTop: '-0.1rem',
                    listStyle: 'none',
                    textIndent: '-2.5rem'
               }}>
                    <li>🗸 Transparent PNG files ready for use</li>
                    <li>🗸 Original 300px PNG file</li>
                    <li>🗸 All three twitch emote sizes (112px, 56px, 28px)</li>
                    <li>🗸 Any other size required for YouTube or Discord as long as it is smaller than the original size</li>
                    <li>🗸 5 revisions during sketching process, and any minor edits after completion</li>
                </ul>
                <br/><br/><br/><Link style={{
                    font: 'normal normal 500 2.025rem/2.475rem Lato',
                    letterSpacing: '1.8px',
                    textDecoration: 'underline',
                    color: 'var(--diviBlue)',
                }}to={'/gallery'}>FULL EMOTE GALLERY</Link></p></div>
            <div><ImageCarousel/></div>
            <hr className={'commissionsLine'} style={{
                position: 'relative',
                width: '86rem',
                marginLeft: '29.5rem',
                borderTop: '0.0625rem solid var(--diviBorder)',
                opacity: 0.5}}/>
            <div style={{
                width: '666px',
                marginLeft: '29.5rem',
                marginTop: ''
            }}
                 className={'commissionsBodyContent'}><p style={{
                font: 'normal normal 500 1.875rem/2.475rem Lato',
                color: 'var(--diviGrey)',
                marginLeft: '2rem',
                marginTop: '5rem',
                display: 'relative'
            }}>TWITCH SUB BADGES <br/><span style={{
                color: 'var(--diviGreen)',
                fontWeight: 800
            }}>$30 USD PER UNIQUE BADGE</span></p><p style={{
                font: 'normal normal normal 1.35rem/1.83125rem Lato',
                letterSpacing: '1.2px',
                marginLeft: '2rem',
                marginTop: '-1.75rem',
                color: 'var(--diviGrey)'
            }}>ESTIMATED COMPLETION TIME: <span style={{
                color: 'var(--diviRed)',
                fontWeight: 800}}>  3-7 days** (for a set) <br/> **Dependent on queue position in the schedule.</span>
                <br/><br/>INCLUDES: <ul style={{
                    marginTop: '-0.1rem',
                    listStyle: 'none',
                    textIndent: '-2.5rem'
                }}>
                    <li>🗸 Transparent PNG files ready for use</li>
                    <li>🗸 A unique badge drawing for each sub badge stage</li>
                    <li>🗸 All three twitch badge sizes (72px, 36px, 18px)</li>
                    <br/><br/>
                    <li>🗸 $100 for a set of 4. $120 for a set of 5. Any additional badges are at a rate of $20/badge.</li>
                    <li style={{
                        fontWeight: 800,
                        color: 'var(--diviRed)'
                    }}>**Recolours are half price. $50 for 4, or $60 for 5. Any additional recoloured badge is $10/badge</li>
                </ul>
                <br/><br/><br/><Link style={{
                    font: 'normal normal 500 2.025rem/2.475rem Lato',
                    letterSpacing: '1.8px',
                    textDecoration: 'underline',
                    color: 'var(--diviBlue)',
                }}to={'/gallery'}>SUB BADGE GALLERY [BADGE TAB]</Link></p></div>
            <BadgeCarousel/>
        </div>
    )
}

