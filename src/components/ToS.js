import React from "react";

export default function ToS() {
    return(
      <div style={{color: 'var(--diviGrey)'}}className="bodyContent tos">
          <h1 style={{
              font: 'normal normal 800 2.025rem/2.75rem Open Sans',
              letterSpacing: '5.4px',
          }}>RULES & TERMS OF SERVICE</h1><br/>
         <h2 style={{
              font: 'normal normal 600 1.35rem/1.85rem Open Sans'
          }}>TERMS AND CONDITIONS</h2>
          <hr style={{
              width: '39%',
              marginLeft: '0.15rem',
              marginTop: '-0.75rem'
          }}/><p style={{
              width: '680px',
              height: '700px'
      }}><ul style={{
              font: 'normal normal 500 1.25rem/1.86rem Open Sans',
              }}>
                  <li>All prices are in USD, paid through Paypal.</li>
                  <li>FULL PAYMENT must be made after the sketch is approved.</li>
                  <li>Twitch emotes are drawn at 300 DPI, 300px by 300px. You will get the appropriate file sizes of: 112px, 56px, and 28px.
                      If you require any larger images, please mention it ahead of time, it will be an additional fee.</li>
                  <li style={{
                      color: 'var(--diviRed)',
                      fontWeight: '600',
                  }}>I am open to working with the commissioner on the emote idea or general commission pose,
                      so you can feel free to place an order without having something immediate in mind.</li>
                  <li style={{
                      fontStyle: 'italic'
                  }}>Emotes are for personal use on Twitch/BTTV/Discord only. The art made for you cannot be altered without permission, resold, nor used in merchandise to be sold. </li>
                  <li style={{ fontStyle: 'italic'}}> Commercial usage (i.e printed merchandise) of any artwork will be an additional charge of the cost of the artwork (+100%).</li>
                  <li style={{
                      fontWeight: 600,
                      color: 'var(--diviRed)'
                  }}>I have the right to refuse any commissions and I reserve all rights to my artwork.</li>
          </ul></p>
          <div style={{
              display: 'flex',
              marginLeft: '47rem',
              marginTop: '-44rem',
              width: '639px',
              height: '456px',
              backgroundColor: 'red',
              borderRadius: '68px',
              background: 'linear-gradient(to right, #EFFFC8 0%, \n' +
                  '    #EFFFC8 50%, #FFD6D6 50%, #FFD6D6 100%'
          }}><p style={{
              width: '233px',
              marginLeft: '3rem',
              textAlign: 'center',
              font: 'normal normal 600 1.6875rem/2.30625rem Open Sans',
              color: '#14D447'
          }}>I WILL DRAW <br/><ul style={{
              textAlign: 'left',
              listStyle: 'none',
              marginTop: '6rem',
              font: 'normal normal normal 1.35rem/1.85rem Open Sans'
          }}>
              <li>🗸 OCs</li>
              <li>🗸 FANART</li>
              <li>🗸 MECHA </li>
              <li>🗸 RL PEOPLE</li>
              <li>🗸 SLIGHT NSFW</li>
              <li> 🗸 ANTHRO</li>
          </ul></p><p style={{
              width: '233px',
              marginLeft: '5rem',
              textAlign: 'center',
              font: 'normal normal 600 1.6875rem/2.30625rem Open Sans',
              color: '#F81212'
          }}>I WON'T DRAW <br/><ul style={{
              textAlign: 'left',
              listStyle: 'none',
              marginTop: '6rem',
              font: 'normal normal normal 1.35rem/1.85rem Open Sans'
          }}>
              <li>✗ NSFW</li>
              <li> ✗ BARA</li>
              <li> ✗ IMITATIONS</li>
          </ul></p></div><br/><br/>
          <h2 style={{
              font: 'normal normal 600 1.35rem/1.85rem Open Sans'
          }}>COMMISSION PROCESS</h2>
          <hr style={{
              width: '39%',
              marginLeft: '0.15rem',
              marginTop: '-0.75rem'
          }}/><p style={{
          width: '680px',
      }}><ol style={{
          font: 'normal normal 500 1.25rem/1.86rem Open Sans',
      }}>
          <li>Contact me through any method and request for a commission with references and/or ideas.</li>
          <li>After I have accepted the commission, I will draw out a sketch. If you approve we continue, otherwise you can ask for revisions on the sketch up to 5 times.</li>
          <li>After approval, the payment is to be sent through Paypal. I can either invoice you, or you can pay through a Paypal.me link.</li>
          <li>After full payment is received, I will start finalizing your artwork.</li>
          <li>A final full resolution piece (artwork or design) will be sent to you when finished. Before handing it off,
              I will ask if there are any minor edits required. **If large edits required after the sketch has been approved, additional charges will be incurred.</li>
      </ol></p>
      </div>
    );
}
