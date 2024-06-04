/*
 * Institutions File
 * -----------------
 *
 * All bank name records should have keys formatted in one of two ways.
 * - The three-digit institution number.
 * - The five-digit transit number, a dash, the three-digit institution number.
 *
 * Transit numbers should only be added when the bank name changes
 * based on the transit number, as is the case with many credit unions.
 */

export const institutions: Record<string, string> = {
  '001': 'Bank of Montreal',
  '002': 'Bank of Nova Scotia',
  '003': 'Royal Bank of Canada',
  '004': 'Toronto-Dominion Bank',
  '006': 'Banque Nationale du Canada',

  '010': 'Canadian Imperial Bank of Commerce',
  '30800-010': 'Simplii Financial',

  '016': 'HSBC Bank Canada',
  '10930-016': 'Barclays Bank of Canada',

  '030': 'Canadian Western Bank',
  '039': 'Banque Laurentienne du Canada',

  177: 'Bank of Canada',

  241: 'Bank of America National Association',
  242: 'Bank of New York Mellon',
  248: 'Barclays Bank of Canada',
  249: 'SBI Canada Bank',
  250: 'BNP Paribas',
  260: 'Citibank Canada',
  265: 'Deutsche Bank AG',
  270: 'JP Morgan Chase Bank, National Assoc.',
  275: 'Keb Hana Bank Canada',
  290: 'UBS Bank (Canada)',

  303: 'AMEX Bank of Canada',
  307: 'Industrial & Commercial Bank of China',
  308: 'Bank of China (Canada)',
  309: 'Vancity Community Investment Bank',
  310: 'First Nations Bank of Canada',
  314: 'JP Morgan Bank Canada',
  315: 'CTBC Bank Corp. (Canada)',
  320: "President's Choice Bank",
  321: 'Habib Canadian Bank',
  323: 'Capital One Bank (Canada Branch)',
  326: "President's Choice Financial",
  328: 'Citibank',
  338: 'Canadian Tire Bank',
  340: 'ICICI Bank Canada',
  343: 'ADS Canadian Bank',
  346: 'Societe Generale (Canada Branch)',
  355: 'Shinhan Bank Canada',
  362: 'Wells Fargo Bank NA Canadian Branch',
  370: 'Wealth One Bank of Canada',

  509: 'The Canada Trust Company',
  540: 'Manulife Bank of Canada',

  614: 'Tangerine Bank',

  809: 'Central 1 Credit Union',
  815: 'Federation des Caisses Desj. Quebec',
  819: 'Caisse Financial Group',

  828: 'Central 1 Credit Union',
  '03832-828': 'Community First Credit Union',
  '14492-828': 'Northern Credit Union',
  '60172-828': 'Northern Credit Union',
  '60182-828': 'Northern Credit Union',
  '61842-828': 'Northern Credit Union',

  829: "Fed. des Caisses Pop. de l'Ontario",
  837: 'Meridian Credit Union Limited',
  839: 'Credit Union Central of Nova Scotia',
  849: 'Brunswick Cr. Union Federation Ltd.',
  853: 'Concentra Bank',
  865: 'Fed. des Caisses Pop. Acadiennes',
  879: 'Credit Union Central of Manitoba',
  889: 'Credit Union Central of Saskatchewan',
  890: 'Caisse Populaire Alliance Limitee',
  899: 'Central 1 Credit Union - Alberta'
}

export default institutions
