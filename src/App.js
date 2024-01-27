// src/App.js
import React from 'react';
import Chat from './Chat';

function App() {
  return (
    <div className="App" style={{padding: "1%", backgroundColor: '#ffb266'}}>
      <header className="App-header">
        <h1>Shri Narendra Modi, 14th Prime Minister of India</h1>
      </header>
      <main style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <div style={{ flex: '1', marginRight: '20px', display: 'flex', flexDirection: 'row',}}>
          <div style={{ flex: 1, }}>
              <Chat />
          </div>
          <div style={{ height: '75vh', flex: 1, marginLeft: '20px', marginRight: '20px', }}>
              <div style={{ height: '75vh', marginBottom: '10px', border: '1px solid #000', padding: '10px', overflowY: 'auto', backgroundColor: 'white'}}>
                <h2>Namaste!</h2>
                <div>
                  Thank you for using the PM Modi bot. Please go through the below instructions once before interacting with the bot. 
                </div>
                
                <h2>Instructions for use: </h2>
                <div style={{marginLeft: '20px'}}>
                  <li>All responses are derived from PM Modi's past speeches. The bot wouldn't be able to answer outside that.</li>
                  <li>At present, the bot is only trained on data from 2014-2022, and can therefore only be questioned from that period.</li>
                  <li>Try to include as many <b>keywords</b> in your query as possible.</li>
                  <li>Most responses will include reference month/year when that topic was mentioned. For specifics, kindly refer to <a href="https://pib.gov.in/allRel.aspx" style={{"textDecoration": "none", "fontWeight": "bold"}}>PIB Press Releases</a></li>
                  <li>Be as straightforward and to-the-point as possible.</li>
                </div>

                <div>
                <br/>
                  In case of any further questions about how to use the bot, feel free to contact me.<br/>
                  <div style={{marginLeft: '20px'}}>
                    <b>Phone:</b> +91 9667547525<br/>
                    <b>Email:</b> abhimanyudayal1@gmail.com.
                  </div>
                </div>
                <div>
                  <br/>
                  <b>Jai Hind!</b>
                  <br/>
                  Abhimanyu Dayal
                </div>
              </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;