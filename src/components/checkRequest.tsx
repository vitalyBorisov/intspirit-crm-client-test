import React, { useCallback, useState } from 'react';
import axios from 'axios';

type ResponseData = { status: number; message: string };

const CheckRequest: React.FC = () => {
  const [response, setResponse] = useState<ResponseData | null>(null);

  const checkServer = useCallback(async () => {
    const { data } = await axios.get<ResponseData>('/api/health');
    if (data) {
      setResponse(data);
    }
  }, []);

  return (
    <div>
      <button className="btn" onClick={checkServer}>
        Health
      </button>

      {response && (
        <div>
          <p>Response:</p>
          <code>{JSON.stringify(response, null, '\t')}</code>
        </div>
      )}
    </div>
  );
};

export default CheckRequest;
