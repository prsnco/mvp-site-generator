import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    businessName: "",
    description: "",
    style: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // This will eventually trigger your backend integration
  };

  return (
    <div>
      <h1>Welcome to the MVP Site Generator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Business Name:</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Style Preference:</label>
          <select name="style" value={formData.style} onChange={handleChange} required>
            <option value="">Select a Style</option>
            <option value="modern">Modern</option>
            <option value="minimal">Minimal</option>
            <option value="playful">Playful</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
