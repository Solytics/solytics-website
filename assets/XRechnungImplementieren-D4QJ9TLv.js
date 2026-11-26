import{_ as a,a as l}from"./FunnelCTA-TGdcSV9O.js";import{d,a as n,b as t,f as o,w as r,y as i,r as s,o as c}from"./app-CrQ6B_nT.js";import"./articles-D6SsQXRe.js";import"./blogPosts-BXoPQBXG.js";import"./LeadCaptureCTA-3AInmZKu.js";const g={class:"prose-article"},D={__name:"XRechnungImplementieren",setup(m){return(q,e)=>{const u=s("router-link");return c(),d("article",g,[e[35]||(e[35]=n("h2",null,"Warum XRechnung implementieren — und wer muss ab wann?",-1)),n("p",null,[e[1]||(e[1]=t("Empfangen müssen deutsche Unternehmen E-Rechnungen bereits seit dem 1. Januar 2025. Beim Versand läuft die Übergangsregelung des § 27 Abs. 38 UStG gestaffelt aus: Ab dem ",-1)),e[2]||(e[2]=n("strong",null,"1. Januar 2027",-1)),e[3]||(e[3]=t(" entfällt sie für Unternehmen mit mehr als ",-1)),e[4]||(e[4]=n("strong",null,"800.000 Euro Gesamtumsatz im Vorjahr",-1)),e[5]||(e[5]=t(", ab dem ",-1)),e[6]||(e[6]=n("strong",null,"1. Januar 2028",-1)),e[7]||(e[7]=t(" für alle übrigen. Maßgeblich ist der Umsatz des Rechnungsstellers, nicht des Empfängers. Details zu den Fristen klärt ",-1)),o(u,{to:"/blog/xrechnung-pflicht-2027/"},{default:r(()=>[...e[0]||(e[0]=[t("XRechnung-Pflicht 2027",-1)])]),_:1}),e[8]||(e[8]=t(".",-1))]),e[36]||(e[36]=n("p",null,[t("XRechnung ist der deutsche Standard nach "),n("strong",null,"EN 16931"),t(" — und das Pflichtformat für Rechnungen an öffentliche Auftraggeber. Wer Software für Rechnungsstellung entwickelt, kommt an XRechnung nicht vorbei.")],-1)),n("p",null,[e[10]||(e[10]=t("Dieser Artikel zeigt Ihnen als Entwickler den direkten Weg: XML-Struktur verstehen, Pflichtfelder korrekt befüllen, gegen EN 16931 validieren und per API automatisieren. Stand: November 2026, geprüft gegen die gültige Spezifikation ",-1)),e[11]||(e[11]=n("strong",null,"XRechnung 3.0.2",-1)),e[12]||(e[12]=t(" (Bundle „Summer 2026 Bugfix“, Fassung vom 31.08.2026). Jedes Code-Beispiel ist mit dem KoSIT-Validator 1.6.3 und der Validator-Konfiguration 2026-08-31 durchgelaufen. Den organisatorischen Rahmen zeigt der Leitfaden dazu, ",-1)),o(u,{to:"/blog/e-rechnung-steuerberater/"},{default:r(()=>[...e[9]||(e[9]=[t("wie Steuerberater ihre Mandanten auf die E-Rechnung umstellen",-1)])]),_:1}),e[13]||(e[13]=t(".",-1))]),e[37]||(e[37]=i(`<h2>1. UBL oder CII: Welche XML-Syntax soll ich wählen?</h2><p>XRechnung unterstützt zwei XML-Syntaxen. Beide sind gleichwertig gültig — die Wahl hängt von Ihrem Anwendungsfall ab.</p><h3>UBL 2.1 (Universal Business Language)</h3><p>UBL ist der international verbreitetere Standard. Die Rechnungsdaten liegen im Namespace <code>urn:oasis:names:specification:ubl:schema:xsd:Invoice-2</code>. Das Root-Element ist <code>&lt;Invoice&gt;</code>.</p><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;Invoice xmlns=&quot;urn:oasis:names:specification:ubl:schema:xsd:Invoice-2&quot;
         xmlns:cac=&quot;urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2&quot;
         xmlns:cbc=&quot;urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2&quot;&gt;
  &lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0&lt;/cbc:CustomizationID&gt;
  &lt;cbc:ID&gt;RE-2026-001&lt;/cbc:ID&gt;
  &lt;cbc:IssueDate&gt;2026-03-22&lt;/cbc:IssueDate&gt;
  &lt;cbc:InvoiceTypeCode&gt;380&lt;/cbc:InvoiceTypeCode&gt;
  &lt;cbc:DocumentCurrencyCode&gt;EUR&lt;/cbc:DocumentCurrencyCode&gt;
  &lt;cac:AccountingSupplierParty&gt;
    &lt;!-- Rechnungssteller --&gt;
  &lt;/cac:AccountingSupplierParty&gt;
  &lt;cac:AccountingCustomerParty&gt;
    &lt;!-- Rechnungsempfänger --&gt;
  &lt;/cac:AccountingCustomerParty&gt;
  &lt;cac:LegalMonetaryTotal&gt;
    &lt;!-- Summen --&gt;
  &lt;/cac:LegalMonetaryTotal&gt;
  &lt;cac:InvoiceLine&gt;
    &lt;!-- Rechnungspositionen --&gt;
  &lt;/cac:InvoiceLine&gt;
&lt;/Invoice&gt;</code></pre><h3>UN/CEFACT CII (Cross-Industry Invoice)</h3><p>CII ist die UN-Syntax, die auch ZUGFeRD verwendet. Das Root-Element ist <code>&lt;CrossIndustryInvoice&gt;</code>. Die Daten sind hierarchisch in Trade-Blöcke gegliedert.</p><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rsm:CrossIndustryInvoice
    xmlns:rsm=&quot;urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100&quot;
    xmlns:ram=&quot;urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100&quot;
    xmlns:udt=&quot;urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100&quot;&gt;
  &lt;rsm:ExchangedDocumentContext&gt;
    &lt;ram:GuidelineSpecifiedDocumentContextParameter&gt;
      &lt;ram:ID&gt;urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0&lt;/ram:ID&gt;
    &lt;/ram:GuidelineSpecifiedDocumentContextParameter&gt;
  &lt;/rsm:ExchangedDocumentContext&gt;
  &lt;rsm:ExchangedDocument&gt;
    &lt;ram:ID&gt;RE-2026-001&lt;/ram:ID&gt;
    &lt;ram:TypeCode&gt;380&lt;/ram:TypeCode&gt;
    &lt;ram:IssueDateTime&gt;
      &lt;udt:DateTimeString format=&quot;102&quot;&gt;20260322&lt;/udt:DateTimeString&gt;
    &lt;/ram:IssueDateTime&gt;
  &lt;/rsm:ExchangedDocument&gt;
  &lt;rsm:SupplyChainTradeTransaction&gt;
    &lt;!-- Handelspartner, Lieferung, Zahlung --&gt;
  &lt;/rsm:SupplyChainTradeTransaction&gt;
&lt;/rsm:CrossIndustryInvoice&gt;</code></pre><h3>UBL oder CII?</h3><p><strong>UBL</strong> eignet sich, wenn Sie international agieren oder PEPPOL nutzen. <strong>CII</strong> ist die Wahl, wenn Sie auch ZUGFeRD unterstützen wollen — ZUGFeRD verwendet ausschließlich CII.</p><h2>2. Welche Pflichtfelder braucht eine XRechnung?</h2><p>EN 16931 definiert rund 160 semantische Datenfelder (BT) in gut 30 Gruppen (BG). Nicht alle sind Pflicht. Die folgende Tabelle zeigt die <strong>Mindestanforderungen</strong> für eine gültige XRechnung:</p><table><thead><tr><th>BT-Nr.</th><th>Feld</th><th>Beschreibung</th><th>Beispielwert</th></tr></thead><tbody><tr><td>BT-1</td><td>Rechnungsnummer</td><td>Eindeutige Kennung der Rechnung</td><td><code>RE-2026-001</code></td></tr><tr><td>BT-2</td><td>Rechnungsdatum</td><td>Ausstellungsdatum</td><td><code>2026-03-22</code></td></tr><tr><td>BT-3</td><td>Rechnungsart</td><td>UNTDID 1001 Code</td><td><code>380</code> (Rechnung)</td></tr><tr><td>BT-5</td><td>Währung</td><td>ISO 4217 Währungscode</td><td><code>EUR</code></td></tr><tr><td>BT-27</td><td>Verkäufername</td><td>Name des Rechnungsstellers</td><td><code>Muster GmbH</code></td></tr><tr><td>BT-44</td><td>Käufername</td><td>Name des Rechnungsempfängers</td><td><code>Kunde AG</code></td></tr><tr><td>BT-109</td><td>Rechnungsbetrag ohne MwSt.</td><td>Gesamtbetrag exkl. MwSt.</td><td><code>1000.00</code></td></tr><tr><td>BT-110</td><td>MwSt.-Betrag</td><td>Summe der Umsatzsteuer</td><td><code>190.00</code></td></tr><tr><td>BT-112</td><td>Rechnungsbetrag mit MwSt.</td><td>Gesamtbetrag inkl. MwSt.</td><td><code>1190.00</code></td></tr><tr><td>BT-115</td><td>Fälliger Betrag</td><td>Zu zahlender Betrag</td><td><code>1190.00</code></td></tr></tbody></table><h3>Welche Felder verlangt XRechnung zusätzlich (BR-DE)?</h3><p>Die deutschen Geschäftsregeln (BR-DE) verschärfen EN 16931. Die folgenden sind in der XRechnung-Schematron 2.6.0 als <code>fatal</code> markiert — fehlt eines davon, lehnt der Validator die Rechnung ab:</p><ul><li><strong>Buyer reference</strong> (BT-10): <strong>BR-DE-15</strong> macht dieses Feld in jeder XRechnung zur Pflicht — auch im B2B.</li><li><strong>Zahlungsdaten</strong> (BG-16): <strong>BR-DE-1</strong> verlangt Angaben zu „PAYMENT INSTRUCTIONS“, etwa die IBAN des Verkäufers bei Überweisung.</li><li><strong>Kontakt des Verkäufers</strong> (BG-6): <strong>BR-DE-2</strong> verlangt die Gruppe, <strong>BR-DE-5</strong> einen Namen oder eine Stelle (BT-41), <strong>BR-DE-6</strong> eine Telefonnummer (BT-42), <strong>BR-DE-7</strong> eine E-Mail-Adresse (BT-43). Die Telefonnummer fehlt in vielen ersten Entwürfen.</li><li><strong>Ort und Postleitzahl</strong>: <strong>BR-DE-3</strong> und <strong>BR-DE-4</strong> für den Verkäufer (BT-37, BT-38), <strong>BR-DE-8</strong> und <strong>BR-DE-9</strong> für den Käufer (BT-52, BT-53).</li></ul><p>Dazu ein Hinweis, der keine Ablehnung auslöst: <strong>BR-DE-TMP-32</strong> erinnert an das Liefer- oder Leistungsdatum (BT-72, BG-14 oder BG-26). Nach § 14 Abs. 4 UStG gehört es ohnehin auf die Rechnung — setzen Sie es also.</p><h3>Leitweg-ID: nur bei Behörden, nicht im B2B</h3><p>Hier verwechseln viele Implementierungen zwei Dinge. BT-10 ist ein <em>generisches</em> Käufer-Referenzfeld. Die <strong>Leitweg-ID</strong> ist kein eigenes Feld, sondern ein Inhalt, den Bund, Länder und Kommunen in BT-10 erwarten (B2G und G2G). Format: <code>04011000-12345-67</code>.</p><p>Im B2B gibt es in der Regel keine Leitweg-ID. BT-10 bleibt trotzdem Pflicht — dort steht dann die Referenz, die Ihr Kunde vorgibt, etwa eine Bestellnummer. Einzelne Länder und Kommunen geben abweichende Zuordnungsmuster vor; auch die gehören in BT-10.</p><h2>3. Wie erzeuge ich eine XRechnung in Python?</h2><p>Für UBL brauchen Sie keine Bibliothek: Pythons <code>xml.etree.ElementTree</code> genügt. Das folgende Skript erzeugt eine B2B-Rechnung mit zwei Positionen und schreibt <code>RE-2026-042.xml</code>. Es setzt jedes Pflichtfeld aus den beiden Tabellen oben; die Kommentare nennen BT-Nummer und Regel. Der KoSIT-Validator nimmt die Datei ohne Fehler, Warnung oder Hinweis an.</p><pre><code>from decimal import Decimal, ROUND_HALF_UP
import xml.etree.ElementTree as ET

NS = {
    &quot;&quot;: &quot;urn:oasis:names:specification:ubl:schema:xsd:Invoice-2&quot;,
    &quot;cac&quot;: &quot;urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2&quot;,
    &quot;cbc&quot;: &quot;urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2&quot;,
}
for prefix, uri in NS.items():
    ET.register_namespace(prefix, uri)

XRECHNUNG_3_0 = &quot;urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0&quot;
PEPPOL_PROFILE = &quot;urn:fdc:peppol.eu:2017:poacc:billing:01:1.0&quot;
CENT = Decimal(&quot;0.01&quot;)


def el(parent, tag, text=None, **attrs):
    prefix, name = tag.split(&quot;:&quot;) if &quot;:&quot; in tag else (&quot;&quot;, tag)
    node = ET.SubElement(parent, f&quot;{{{NS[prefix]}}}{name}&quot;, attrs)
    if text is not None:
        node.text = str(text)
    return node


def money(parent, tag, amount):
    el(parent, tag, f&quot;{amount:.2f}&quot;, currencyID=&quot;EUR&quot;)


def address(parent, p):
    addr = el(parent, &quot;cac:PostalAddress&quot;)
    el(addr, &quot;cbc:StreetName&quot;, p[&quot;street&quot;])
    el(addr, &quot;cbc:CityName&quot;, p[&quot;city&quot;])          # BR-DE-3 / BR-DE-8
    el(addr, &quot;cbc:PostalZone&quot;, p[&quot;zip&quot;])         # BR-DE-4 / BR-DE-9
    el(el(addr, &quot;cac:Country&quot;), &quot;cbc:IdentificationCode&quot;, &quot;DE&quot;)


def party(parent, tag, p, contact=None):
    pty = el(el(parent, tag), &quot;cac:Party&quot;)
    el(pty, &quot;cbc:EndpointID&quot;, p[&quot;email&quot;], schemeID=&quot;EM&quot;)  # BT-34 / BT-49
    address(pty, p)
    if &quot;vat_id&quot; in p:
        tax = el(pty, &quot;cac:PartyTaxScheme&quot;)
        el(tax, &quot;cbc:CompanyID&quot;, p[&quot;vat_id&quot;])
        el(el(tax, &quot;cac:TaxScheme&quot;), &quot;cbc:ID&quot;, &quot;VAT&quot;)
    el(el(pty, &quot;cac:PartyLegalEntity&quot;), &quot;cbc:RegistrationName&quot;, p[&quot;name&quot;])
    if contact:                                        # BR-DE-2, -5, -6, -7
        c = el(pty, &quot;cac:Contact&quot;)
        el(c, &quot;cbc:Name&quot;, contact[&quot;name&quot;])
        el(c, &quot;cbc:Telephone&quot;, contact[&quot;phone&quot;])
        el(c, &quot;cbc:ElectronicMail&quot;, contact[&quot;email&quot;])


def build_invoice(inv):
    lines = [(l, (Decimal(l[&quot;qty&quot;]) * Decimal(l[&quot;price&quot;])).quantize(CENT, ROUND_HALF_UP))
             for l in inv[&quot;lines&quot;]]
    net = sum(amount for _, amount in lines)
    vat = (net * Decimal(&quot;0.19&quot;)).quantize(CENT, ROUND_HALF_UP)

    root = ET.Element(f&quot;{{{NS[&#39;&#39;]}}}Invoice&quot;)
    el(root, &quot;cbc:CustomizationID&quot;, XRECHNUNG_3_0)      # BT-24
    el(root, &quot;cbc:ProfileID&quot;, PEPPOL_PROFILE)           # BT-23
    el(root, &quot;cbc:ID&quot;, inv[&quot;number&quot;])                   # BT-1
    el(root, &quot;cbc:IssueDate&quot;, inv[&quot;date&quot;])              # BT-2, YYYY-MM-DD
    el(root, &quot;cbc:DueDate&quot;, inv[&quot;due&quot;])                 # BT-9
    el(root, &quot;cbc:InvoiceTypeCode&quot;, &quot;380&quot;)              # BT-3
    el(root, &quot;cbc:DocumentCurrencyCode&quot;, &quot;EUR&quot;)         # BT-5
    el(root, &quot;cbc:BuyerReference&quot;, inv[&quot;buyer_ref&quot;])    # BT-10, BR-DE-15

    party(root, &quot;cac:AccountingSupplierParty&quot;, inv[&quot;seller&quot;], inv[&quot;seller_contact&quot;])
    party(root, &quot;cac:AccountingCustomerParty&quot;, inv[&quot;buyer&quot;])
    el(el(root, &quot;cac:Delivery&quot;), &quot;cbc:ActualDeliveryDate&quot;, inv[&quot;delivered&quot;])  # BT-72

    pay = el(root, &quot;cac:PaymentMeans&quot;)                  # BG-16, BR-DE-1
    el(pay, &quot;cbc:PaymentMeansCode&quot;, &quot;58&quot;)               # SEPA credit transfer
    el(el(pay, &quot;cac:PayeeFinancialAccount&quot;), &quot;cbc:ID&quot;, inv[&quot;iban&quot;])
    el(el(root, &quot;cac:PaymentTerms&quot;), &quot;cbc:Note&quot;, inv[&quot;terms&quot;])  # BT-20

    tax_total = el(root, &quot;cac:TaxTotal&quot;)
    money(tax_total, &quot;cbc:TaxAmount&quot;, vat)              # BT-110
    sub = el(tax_total, &quot;cac:TaxSubtotal&quot;)
    money(sub, &quot;cbc:TaxableAmount&quot;, net)
    money(sub, &quot;cbc:TaxAmount&quot;, vat)
    cat = el(sub, &quot;cac:TaxCategory&quot;)
    el(cat, &quot;cbc:ID&quot;, &quot;S&quot;)
    el(cat, &quot;cbc:Percent&quot;, &quot;19&quot;)
    el(el(cat, &quot;cac:TaxScheme&quot;), &quot;cbc:ID&quot;, &quot;VAT&quot;)

    totals = el(root, &quot;cac:LegalMonetaryTotal&quot;)
    money(totals, &quot;cbc:LineExtensionAmount&quot;, net)       # BT-106
    money(totals, &quot;cbc:TaxExclusiveAmount&quot;, net)        # BT-109
    money(totals, &quot;cbc:TaxInclusiveAmount&quot;, net + vat)  # BT-112
    money(totals, &quot;cbc:PayableAmount&quot;, net + vat)       # BT-115

    for i, (l, amount) in enumerate(lines, 1):
        line = el(root, &quot;cac:InvoiceLine&quot;)
        el(line, &quot;cbc:ID&quot;, i)
        el(line, &quot;cbc:InvoicedQuantity&quot;, l[&quot;qty&quot;], unitCode=l[&quot;unit&quot;])
        money(line, &quot;cbc:LineExtensionAmount&quot;, amount)  # BT-131
        item = el(line, &quot;cac:Item&quot;)
        el(item, &quot;cbc:Name&quot;, l[&quot;name&quot;])
        cat = el(item, &quot;cac:ClassifiedTaxCategory&quot;)
        el(cat, &quot;cbc:ID&quot;, &quot;S&quot;)
        el(cat, &quot;cbc:Percent&quot;, &quot;19&quot;)
        el(el(cat, &quot;cac:TaxScheme&quot;), &quot;cbc:ID&quot;, &quot;VAT&quot;)
        money(el(line, &quot;cac:Price&quot;), &quot;cbc:PriceAmount&quot;, Decimal(l[&quot;price&quot;]))

    ET.indent(root)
    return ET.tostring(root, encoding=&quot;UTF-8&quot;, xml_declaration=True)


invoice = {
    &quot;number&quot;: &quot;RE-2026-042&quot;,
    &quot;date&quot;: &quot;2026-11-16&quot;,
    &quot;due&quot;: &quot;2026-12-16&quot;,
    &quot;delivered&quot;: &quot;2026-11-13&quot;,
    &quot;buyer_ref&quot;: &quot;PO-4711&quot;,  # B2B: Bestellnummer des Kunden; Behörde: Leitweg-ID
    &quot;seller&quot;: {&quot;name&quot;: &quot;DevCorp GmbH&quot;, &quot;street&quot;: &quot;Entwicklerweg 42&quot;, &quot;city&quot;: &quot;München&quot;,
               &quot;zip&quot;: &quot;80331&quot;, &quot;email&quot;: &quot;rechnung@devcorp.example&quot;, &quot;vat_id&quot;: &quot;DE123456789&quot;},
    &quot;seller_contact&quot;: {&quot;name&quot;: &quot;Buchhaltung&quot;, &quot;phone&quot;: &quot;+49 89 1234567&quot;,
                       &quot;email&quot;: &quot;buchhaltung@devcorp.example&quot;},
    &quot;buyer&quot;: {&quot;name&quot;: &quot;Kunde AG&quot;, &quot;street&quot;: &quot;Marktplatz 1&quot;, &quot;city&quot;: &quot;Köln&quot;,
              &quot;zip&quot;: &quot;50667&quot;, &quot;email&quot;: &quot;eingang@kunde.example&quot;},
    &quot;iban&quot;: &quot;DE02120300000000202051&quot;,
    &quot;terms&quot;: &quot;Zahlbar innerhalb von 30 Tagen netto&quot;,
    &quot;lines&quot;: [
        {&quot;name&quot;: &quot;API-Entwicklung&quot;, &quot;qty&quot;: &quot;80&quot;, &quot;unit&quot;: &quot;HUR&quot;, &quot;price&quot;: &quot;120.00&quot;},
        {&quot;name&quot;: &quot;Code Review&quot;, &quot;qty&quot;: &quot;20&quot;, &quot;unit&quot;: &quot;HUR&quot;, &quot;price&quot;: &quot;95.00&quot;},
    ],
}

if __name__ == &quot;__main__&quot;:
    with open(&quot;RE-2026-042.xml&quot;, &quot;wb&quot;) as f:
        f.write(build_invoice(invoice))</code></pre><p>Drei Stellen, an denen eigene Implementierungen oft abweichen:</p><ul><li><strong>Beträge als <code>Decimal</code></strong>, nicht als <code>float</code> — sonst passen die Summenregeln nicht (siehe Fehler 2).</li><li><strong>Reihenfolge der Elemente:</strong> Das UBL-Schema schreibt sie vor. <code>cac:Delivery</code> steht nach den Parteien und vor <code>cac:PaymentMeans</code>, <code>cac:TaxTotal</code> vor <code>cac:LegalMonetaryTotal</code>, die Positionen am Schluss.</li><li><strong>Elektronische Adresse</strong> (BT-34, BT-49): Hier eine E-Mail-Adresse mit <code>schemeID=&quot;EM&quot;</code>. Wer über Peppol versendet, trägt die Peppol-ID ein.</li></ul><p>CII ist mit derselben Technik möglich, aber deutlich tiefer verschachtelt. Wer ZUGFeRD braucht, also PDF mit eingebettetem CII, greift besser zu einer Bibliothek wie <a href="https://github.com/pretix/python-drafthorse" target="_blank" rel="noopener">drafthorse</a> (Python) oder <a href="https://www.mustangproject.org/" target="_blank" rel="noopener">Mustang</a> (Java).</p><h2>4. Wie validiere ich eine XRechnung gegen EN 16931?</h2><p>Referenz ist der <strong>KoSIT-Validator</strong> mit der offiziellen Konfiguration für XRechnung — was der ablehnt, lehnt auch ein Empfänger ab, der dasselbe Werkzeug nutzt. Beides ist frei auf GitHub: der Validator unter <a href="https://github.com/itplr-kosit/validator/releases" target="_blank" rel="noopener">itplr-kosit/validator</a> (aktuell 1.6.3, Java 11 oder neuer), die Konfiguration unter <a href="https://github.com/itplr-kosit/validator-configuration-xrechnung/releases" target="_blank" rel="noopener">itplr-kosit/validator-configuration-xrechnung</a> (aktuell 2026-08-31).</p><p>Der Validator prüft in dieser Reihenfolge:</p><table><thead><tr><th>Schritt</th><th>Prüfung</th><th>Was dabei auffällt</th></tr></thead><tbody><tr><td>1. Prüfszenario</td><td>Wählt anhand der CustomizationID (BT-24) die passende Prüfung</td><td>Unbekannte Kennung: kein Szenario greift, die Rechnung wird abgelehnt</td></tr><tr><td>2. Schema</td><td>XSD für UBL 2.1 oder CII D16B</td><td>Struktur, Datentypen, Reihenfolge der Elemente</td></tr><tr><td>3. EN 16931</td><td>Schematron der CEN (Regeln BR-*, BR-CO-*, BR-CL-*)</td><td>Pflichtfelder der Norm, Summen, Codelisten</td></tr><tr><td>4. XRechnung</td><td>Schematron der KoSIT (Regeln BR-DE-*, BR-TMP-*, Teile von Peppol BIS)</td><td>Deutsche Zusatzpflichten wie BT-10 und Telefonnummer</td></tr></tbody></table><h3>Validator von der Kommandozeile</h3><pre><code>unzip xrechnung-3.0.2-validator-configuration-2026-08-31.zip -d kosit
java -jar validator-1.6.3-standalone.jar \\
  -s kosit/scenarios.xml -r &quot;$PWD/kosit&quot; -h RE-2026-042.xml</code></pre><p>Der Validator schreibt <code>RE-2026-042-report.xml</code> und mit <code>-h</code> zusätzlich einen lesbaren HTML-Bericht. Die Konsole zeigt am Ende <code>Acceptable: 1 Rejected: 0</code>.</p><h3>Validierung in die CI/CD-Pipeline integrieren</h3><p>Der Validator nimmt mehrere Dateien in einem Aufruf und endet mit einem Exit-Code ungleich 0, sobald eine davon abgelehnt wird (getestet mit 1.6.3). Das reicht für einen Pipeline-Schritt:</p><pre><code>import subprocess
import sys
from pathlib import Path

VALIDATOR = &quot;validator-1.6.3-standalone.jar&quot;
CONFIG = Path(&quot;kosit&quot;).resolve()  # entpackte Konfiguration 2026-08-31

invoices = sorted(Path(&quot;output&quot;).glob(&quot;*.xml&quot;))
result = subprocess.run(
    [&quot;java&quot;, &quot;-jar&quot;, VALIDATOR, &quot;-s&quot;, CONFIG / &quot;scenarios.xml&quot;, &quot;-r&quot;, CONFIG,
     &quot;-o&quot;, &quot;reports&quot;, &quot;-h&quot;, *invoices],
)
sys.exit(result.returncode)  # 0 = alle annehmbar, sonst mindestens eine abgelehnt</code></pre><h2>5. Welche Fehler treten am häufigsten auf?</h2>`,37)),n("p",null,[e[15]||(e[15]=t("Diese Fehler treten bei der ",-1)),e[16]||(e[16]=n("strong",null,"EN 16931 Implementierung",-1)),e[17]||(e[17]=t(" am häufigsten auf. Welche Fehler im laufenden Betrieb zu Ablehnungen führen, zeigt ",-1)),o(u,{to:"/blog/e-rechnung-fehler/"},{default:r(()=>[...e[14]||(e[14]=[t("Die häufigsten Fehler bei der E-Rechnung",-1)])]),_:1}),e[18]||(e[18]=t(".",-1))]),e[38]||(e[38]=i(`<h3>Fehler 1: Falsche CustomizationID</h3><p>Die CustomizationID muss exakt stimmen, und zwar aus einem anderen Grund, als oft zu lesen ist. Die Regel <strong>BR-DE-21</strong>, die den Wert prüft, ist in der Schematron nur eine Warnung. Abgelehnt wird die Rechnung früher: Der KoSIT-Validator wählt sein Prüfszenario per exaktem Textvergleich mit diesem Wert. Passt keines, greift kein Prüfszenario, und der Bericht lautet „abgelehnt“ — ohne dass eine einzige Fachregel gelaufen ist.</p><p>Zwei Stolperfallen: Seit XRechnung 3.0 lautet der Namensraum <code>xeinkauf.de:kosit:xrechnung_</code>. Ältere Anleitungen zeigen noch die 2.x-Form <code>xoev-de:kosit:standard:xrechnung_</code> — die ist für 3.x ungültig. Und der Wert trägt nur <strong>Major- und Minor-Version</strong>: Auch bei Spezifikation 3.0.2 steht dort <code>_3.0</code>, nicht <code>_3.0.2</code>.</p><pre><code>&lt;!-- Falsch: ohne CIUS-Kennung --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017&lt;/cbc:CustomizationID&gt;

&lt;!-- Falsch: 2.x-Namensraum in einer 3.x-Rechnung --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017#compliant#urn:xoev-de:kosit:standard:xrechnung_3.0&lt;/cbc:CustomizationID&gt;

&lt;!-- Richtig (XRechnung 3.0.2) --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0&lt;/cbc:CustomizationID&gt;</code></pre><p>In CII steht derselbe String in <code>rsm:ExchangedDocumentContext/ram:GuidelineSpecifiedDocumentContextParameter/ram:ID</code>. Semantisch ist es <code>BT-24</code> (Specification identifier).</p><h3>Fehler 2: Steuerberechnung mit Rundungsfehlern</h3><p>EN 16931 verlangt kaufmännische Rundung auf 2 Dezimalstellen. Fließkomma-Arithmetik führt zu Abweichungen.</p><pre><code># Falsch: Fließkomma-Fehler
tax = 100.05 * 0.19  # 19.0095000000000027...

# Richtig: Decimal verwenden
from decimal import Decimal, ROUND_HALF_UP
tax = (Decimal(&quot;100.05&quot;) * Decimal(&quot;0.19&quot;)).quantize(
    Decimal(&quot;0.01&quot;), rounding=ROUND_HALF_UP
)  # Decimal(&#39;19.01&#39;)</code></pre><h3>Fehler 3: BT-10 nur bei Behördenrechnungen befüllen</h3><p>Die Geschäftsregel <strong>BR-DE-15</strong> verlangt <code>BT-10</code> (Buyer reference) in <em>jeder</em> XRechnung — nicht nur bei B2G. Wer das Feld im B2B wegoptimiert, weil dort keine Leitweg-ID existiert, produziert eine ungültige Rechnung. Bei öffentlichen Auftraggebern muss zusätzlich der <em>Inhalt</em> stimmen: eine gültige Leitweg-ID.</p><h3>Fehler 4: Datumsformat in CII</h3><p>CII verwendet ein anderes Datumsformat als UBL. Häufiger Fehler: ISO-8601 statt CCYYMMDD. Seit der XRechnung-Schematron 2.6.0 (31.08.2026) prüft das die Regel <strong>BR-TMP-7</strong> für alle Datumsfelder, in UBL umgekehrt <strong>BR-TMP-6</strong> auf JJJJ-MM-TT. Beide sind noch Warnungen; die KoSIT hat angekündigt, sie in einem kommenden Release auf <code>fatal</code> zu heben.</p><pre><code>&lt;!-- Falsch in CII --&gt;
&lt;udt:DateTimeString format=&quot;102&quot;&gt;2026-03-22&lt;/udt:DateTimeString&gt;

&lt;!-- Richtig in CII --&gt;
&lt;udt:DateTimeString format=&quot;102&quot;&gt;20260322&lt;/udt:DateTimeString&gt;</code></pre><h3>Fehler 5: Summen stimmen nicht überein</h3><p>EN 16931 enthält arithmetische Regeln (BR-CO-*). Die Summen müssen exakt passen:</p><ul><li><strong>BR-CO-10</strong>: BT-106 (Summe Nettobeträge der Positionen) = Summe aller BT-131</li><li><strong>BR-CO-13</strong>: BT-109 (Rechnungsbetrag ohne MwSt.) = Summe aller BT-131 − BT-107 + BT-108</li><li><strong>BR-CO-15</strong>: BT-112 (Rechnungsbetrag mit MwSt.) = BT-109 + BT-110 (MwSt.-Betrag)</li><li><strong>BR-CO-16</strong>: BT-115 (Fälliger Betrag) = BT-112 − BT-113 (bereits gezahlt) + BT-114 (Rundungsbetrag)</li></ul><p>Zwei Details, die oft danebengehen: <code>BT-107</code> und <code>BT-108</code> sind bereits <em>Summen</em> auf Dokumentebene — die einzelnen Nachlässe stehen in <code>BT-92</code>, die einzelnen Zuschläge in <code>BT-99</code>. Und wer <code>BT-114</code> in BR-CO-16 vergisst, bekommt genau dann einen Fehler, wenn gerundet wird.</p><h3>Fehler 6: Falsche Unit-Codes</h3><p>Mengeneinheiten stammen aus <strong>UN/ECE Recommendation 20</strong> <em>und</em> <strong>Recommendation 21</strong> — ausgewählt nach der in Rec 20, Intro 2.a) beschriebenen Methode. Codes aus Rec 21 tragen ein vorangestelltes <code>X</code>, etwa <code>XPP</code> (Packung). Wer nur in Rec 20 nachschlägt, findet die Verpackungscodes nicht. Häufige Codes:</p><table><thead><tr><th>Code</th><th>Bedeutung</th></tr></thead><tbody><tr><td><code>HUR</code></td><td>Stunde</td></tr><tr><td><code>DAY</code></td><td>Tag</td></tr><tr><td><code>C62</code></td><td>Stück (Einheit)</td></tr><tr><td><code>MON</code></td><td>Monat</td></tr><tr><td><code>KWH</code></td><td>Kilowattstunde</td></tr><tr><td><code>TNE</code></td><td>Tonne (metrisch)</td></tr></tbody></table><p><strong>Tipp:</strong> Validieren Sie jede generierte Rechnung <strong>vor dem Versand</strong> — der Pipeline-Schritt aus Abschnitt 4 kostet einen Java-Aufruf.</p><h2>6. Was kommt als Nächstes: XRechnung 4.0, Peppol, Fristen</h2><p>Sie haben die Grundlagen der <strong>XRechnung-Implementierung</strong> kennengelernt. Drei Punkte für den produktiven Einsatz:</p>`,23)),n("ul",null,[n("li",null,[e[20]||(e[20]=n("strong",null,"Beispieldatei zum Abgleich:",-1)),e[21]||(e[21]=t(" Eine vollständige, Block für Block erklärte XRechnung zum Download — UBL und CII — finden Sie in ",-1)),o(u,{to:"/blog/xrechnung-beispiel/"},{default:r(()=>[...e[19]||(e[19]=[t("XRechnung-Beispiel",-1)])]),_:1}),e[22]||(e[22]=t(". Ideal, um Ihre eigene Ausgabe Feld für Feld dagegenzuhalten.",-1))]),n("li",null,[e[24]||(e[24]=n("strong",null,"Branchenerweiterungen prüfen:",-1)),e[25]||(e[25]=t(" Bau, Gesundheit, Logistik und Automotive haben zusätzliche Anforderungen — siehe ",-1)),o(u,{to:"/blog/en16931-branchenerweiterungen/"},{default:r(()=>[...e[23]||(e[23]=[t("EN 16931 Branchenerweiterungen",-1)])]),_:1}),e[26]||(e[26]=t(".",-1))]),n("li",null,[e[28]||(e[28]=n("strong",null,"ZUGFeRD parallel einrichten:",-1)),e[29]||(e[29]=t(" Viele B2B-Empfänger bevorzugen das Hybridformat. Die Unterschiede klärt ",-1)),o(u,{to:"/blog/xrechnung-vs-zugferd/"},{default:r(()=>[...e[27]||(e[27]=[t("XRechnung vs. ZUGFeRD",-1)])]),_:1}),e[30]||(e[30]=t(".",-1))]),e[31]||(e[31]=n("li",null,[n("strong",null,"Fristen beachten:"),t(" Versandpflicht ab 2027 über 800.000 Euro Vorjahresumsatz, ab 2028 für alle.")],-1))]),e[39]||(e[39]=n("h3",null,"Muss ich Peppol nutzen?",-1)),e[40]||(e[40]=n("p",null,"Nein. Der Gesetzgeber schreibt keinen Übermittlungsweg vor. Das BMF nennt E-Mail, Portal-Download, EDI, Schnittstelle oder gemeinsamen Speicherort als zulässige Wege — welchen Weg und welches zulässige Format die Parteien wählen, ist eine zivilrechtliche Frage zwischen ihnen. Für den Inlandsversand reicht XRechnung per E-Mail.",-1)),n("p",null,[e[33]||(e[33]=t("Peppol bleibt trotzdem relevant: Die KoSIT ist deutsche Peppol Authority, und die XRechnung-Schematron prüft Regeln aus Peppol BIS Billing mit (Version 2.6.0 nutzt Peppol BIS Billing 3.0.21). Wer grenzüberschreitend fakturiert, kommt an einem Access Point praktisch kaum vorbei. Einordnung in ",-1)),o(u,{to:"/blog/peppol-b2b-deutschland-2026/"},{default:r(()=>[...e[32]||(e[32]=[t("Peppol im deutschen B2B",-1)])]),_:1}),e[34]||(e[34]=t(".",-1))]),e[41]||(e[41]=n("h3",null,"Kommt XRechnung 4.0?",-1)),e[42]||(e[42]=n("p",null,[t("Ja, aber nicht vor 2027. Die KoSIT hat am 15.09.2026 eine "),n("strong",null,"Vorversion der Spezifikation XRechnung 4.0.0"),t(" veröffentlicht, als deutsche Umsetzung der neuen EU-Norm EN 16931-1:2026. Die finale Version soll laut KoSIT voraussichtlich im Frühjahr 2027 erscheinen, zusammen mit den technischen Komponenten. Ein Gültigkeitsdatum nennt die KoSIT noch nicht ("),n("a",{href:"https://xeinkauf.de/xrechnung/versionen-und-bundles/",target:"_blank",rel:"noopener"},"Versionen und Bundles"),t(", Stand 15.11.2026).")],-1)),e[43]||(e[43]=n("p",null,[t("Für heutige Implementierungen ändert das nichts: Gültig ist "),n("strong",null,"XRechnung 3.0.2"),t(" auf Basis der EN-16931-Linie von 2017. Planen Sie die CustomizationID und die Schematron-Artefakte aber als "),n("em",null,"konfigurierbar"),t(" ein, nicht als Konstante im Code — mit 4.0 werden beide wechseln.")],-1)),o(a,{category:"e-rechnung"}),o(l,{slug:"xrechnung-implementieren"})])}}};export{D as default};
