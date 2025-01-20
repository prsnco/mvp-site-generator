import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(process.env.AIRTABLE_BASE_ID);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { businessName, description, style } = req.body;

    try {
      await base("Table 1").create([
        {
          fields: {
            "Business Name": businessName,
            Description: description,
            Style: style,
          },
        },
      ]);

      res.status(200).json({ message: "Data submitted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to submit data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
