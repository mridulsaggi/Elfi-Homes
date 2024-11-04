// Import the lead schema model if needed for database operations
// import lead from "../models/leadschema";

// Define mappings for common column names
const fieldMappings = {
    name: ['name', 'firstname', 'First Name', 'clientname', 'username'],
    email: ['email', 'emailaddress', 'contactemail'],
    phone: ['phone', 'contactnumber', 'phonenumber'],
    status: ['status']
};

// Helper function to standardize data
function standardizeData(row) {
    const standardizedRow = {};

    // Iterate over each field defined in fieldMappings
    for (const targetField in fieldMappings) {
        // Find if the row has any key matching the field mapping
        const matchedKey = Object.keys(row).find(key =>
            fieldMappings[targetField].includes(key.toLowerCase())
        );

        // If a matching key is found, assign its value to the standardizedRow
        if (matchedKey) {
            standardizedRow[targetField] = row[matchedKey];
        } else {
            // If no matching key is found, set the field to null
            standardizedRow[targetField] = null;
        }
    }

    return standardizedRow;
}

const upload_extracted_data = async (req, res) => {
    try {
        const rawData = req.body.data;

        // Standardize each row
        const data = rawData.map(row => standardizeData(row));

        console.log(data);

        // Insert standardized data into MongoDB (uncomment when lead schema is set up)
        // await lead.insertMany(data);

        res.status(200).json({ message: 'Data uploaded and saved successfully' });
    } catch (error) {
        console.error("Error saving data to database:", error);
        res.status(500).json({ error: 'Failed to save data' });
    }
};

export default upload_extracted_data;
