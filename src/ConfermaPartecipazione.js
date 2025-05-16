import React from 'react';

function ConfermaPartecipazione() {
  return (
    <div>
      <h1>Conferma Partecipazione</h1>
      <form
        action="https://formsubmit.co/TUA_EMAIL@esempio.com"
        method="POST"
      >
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>

        <div>
          <label htmlFor="email">Cognome:</label>
          <input type="cognome" id="cognome" name="cognome" required />
        </div>

        <div>
          <label htmlFor="partecipa">Parteciperai?</label>
          <select id="partecipa" name="partecipa" required>
            <option value="Sì">Sì</option>
            <option value="Forse">Forse</option>
            <option value="No">No</option>
          </select>
        </div>

        <button type="submit">Invia conferma</button>
      </form>
    </div>
  );
}

export default ConfermaPartecipazione;
