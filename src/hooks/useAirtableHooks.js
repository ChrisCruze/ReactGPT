import { useState, useEffect } from "react";
import axios from "axios";

// Fetches data based on URL parameters
function useAirtableDataFromURLParams(apiKey) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const baseId = queryParams.get("baseID") || "appaN7TQgS2BGUE0v";
		const tableId = queryParams.get("tableID") || "tbl4d07VM7GWLiIkK";
		const recordId = queryParams.get("recordID") || "recsVpmZaPJ709OTQ";

		if (!baseId || !tableId || !recordId) {
			setError("Missing URL parameters.");
			setLoading(false);
			return;
		}

		const baseUrl = `https://api.airtable.com/v0/${baseId}/${tableId}/${recordId}`;
		axios
			.get(baseUrl, { headers: { Authorization: "Bearer " + apiKey } })
			.then((response) => {
				const airtableURL = response.data.fields.airtableURL;
				if (airtableURL) {
					return axios.get(airtableURL, {
						headers: { Authorization: "Bearer " + apiKey },
					});
				}
				console.log({ response });
				return response;
			})
			.then((finalResponse) => {
				setData(finalResponse.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [apiKey]);

	return { data, loading, error };
}

// Fetches a specific record
function useAirtableRecord(
	baseId,
	tableName,
	recordId,
	apiKey = "YOUR_API_KEY"
) {
	const [record, setRecord] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const url = `https://api.airtable.com/v0/${baseId}/${tableName}/${recordId}`;
		axios
			.get(url, {
				headers: { Authorization: `Bearer ${apiKey}` },
			})
			.then((response) => {
				setRecord(response.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [baseId, tableName, recordId, apiKey]);

	return { record, loading, error };
}

// Fetches an array of records
function useAirtableArray(
	baseId = "YOUR_BASE_ID",
	tableName = "YOUR_TABLE_NAME",
	apiKey = "YOUR_API_KEY"
) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.airtable.com/v0/${baseId}/${tableName}`,
					{
						headers: {
							Authorization: `Bearer ${apiKey}`,
						},
					}
				);
				setData(response.data.records);
				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		};
		fetchData();
	}, [baseId, tableName, apiKey]);

	return { data, loading, error };
}

export { useAirtableDataFromURLParams, useAirtableRecord, useAirtableArray };
