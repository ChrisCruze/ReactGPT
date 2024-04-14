import { useState, useEffect } from "react";
import axios from "axios";

function useSingleAirtableRecord(baseId, tableName, recordId, apiKey) {
	const [record, setRecord] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!baseId || !tableName || !recordId) {
			setError("Missing required parameters.");
			setLoading(false);
			return;
		}
		const url = `https://api.airtable.com/v0/${baseId}/${tableName}/${recordId}`;
		axios
			.get(url, {
				headers: { Authorization: `Bearer ${apiKey}` },
			})
			.then((response) => {
				setRecord({ ...response.data, ...response.data.fields });
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [baseId, tableName, recordId, apiKey]);

	return { record, loading, error };
}

export default useSingleAirtableRecord;
