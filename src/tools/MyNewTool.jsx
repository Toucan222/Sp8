import React, { useState } from 'react';
import { askDeepseek } from '../utils/deepseeksApi';

export default function MyNewTool() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await askDeepseek(query);
      setResponse(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>My New Tool</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your prompt..."
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Submit'}
      </button>

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Response: </strong>
          <p>{response}</p>
        </div>
      )}
    </form>
  );
}
