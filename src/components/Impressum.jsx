import React from 'react';


export default function Impressum() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    Impressum
                    <hr />
                </div>
                <div className='card-body'>
                    <p>
                        <span><strong>Fadi Azzam</strong></span><br />
                        <span>Königstraße 22</span><br />
                        <span >01079 Dresden</span><br />
                        <br />
                        <span><strong>Tel: </strong></span>
                        <span>004917647683592</span><br />
                        <span><strong>Email: </strong></span>
                        <span>fadi.azzam@outlook.de</span>
                    </p>

                </div>
                <div className='card-body'>
                    <div className="card-header">
                        Haftung für Links
                    </div>
                    <div>
                        <p>
                            Unsere Webseite enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                        </p>
                    </div>
                </div>
                <div className='card-body'>
                    <div className="card-header">
                        Urheberrecht
                    </div>
                    <div>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                            Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                            Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                            bitten wir um einen entsprechenden Hinweis.
                            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}