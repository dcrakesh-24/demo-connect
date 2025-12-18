/**
 * CSV Parser Utility
 * Parses CSV files and converts them to structured data
 */

export interface CsvRow {
  section: string;
  field: string;
  value: string;
  type: string;
}

/**
 * Parse CSV text into structured rows
 */
export function parseCsv(text: string): CsvRow[] {
  const rows: CsvRow[] = [];
  const lines = text.split('\n');
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const columns = parseCsvLine(line);
    if (columns.length >= 4) {
      rows.push({
        section: columns[0] || '',
        field: columns[1] || '',
        value: columns[2] || '',
        type: columns[3] || 'string',
      });
    }
  }
  
  return rows;
}

/**
 * Parse a single CSV line, handling quoted fields
 */
function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let currentField = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        // Escaped quote
        currentField += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      // End of field
      fields.push(currentField);
      currentField = '';
    } else {
      currentField += char;
    }
  }
  
  // Add last field
  fields.push(currentField);
  
  return fields;
}

/**
 * Convert CSV rows to a structured object
 */
export function csvToObject(rows: CsvRow[]): Record<string, Record<string, any>> {
  const result: Record<string, Record<string, any>> = {};
  
  for (const row of rows) {
    if (!result[row.section]) {
      result[row.section] = {};
    }
    
    // Convert value based on type
    let value: any = row.value;
    if (row.type === 'color') {
      value = row.value; // Keep as string for CSS
    } else if (row.type === 'number') {
      value = parseFloat(row.value) || 0;
    } else if (row.type === 'boolean') {
      value = row.value.toLowerCase() === 'true';
    } else {
      // Handle newlines in strings
      value = row.value.replace(/\\n/g, '\n');
    }
    
    result[row.section][row.field] = value;
  }
  
  return result;
}

/**
 * Load and parse CSV file
 */
export async function loadCsvFile(url: string): Promise<Record<string, Record<string, any>>> {
  try {
    const response = await fetch(url, {
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to load CSV: ${response.statusText}`);
    }
    
    const text = await response.text();
    const rows = parseCsv(text);
    return csvToObject(rows);
  } catch (error) {
    console.error(`Error loading CSV from ${url}:`, error);
    throw error;
  }
}

