import React, { Fragment } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import useURLParameters from "./hooks/useURLParameters";
import useSingleAirtableRecord from "./hooks/useSingleAirtableRecord";
import Hero from "./components/Hero";

function App() {
	const { baseId, tableName, recordId } = useURLParameters();
	console.log({ baseId, tableName, recordId });
	const apiKey = process.env.REACT_APP_API_KEY;
	const { record, loading, error } = useSingleAirtableRecord(
		baseId || "appaN7TQgS2BGUE0v",
		tableName || "tbl4d07VM7GWLiIkK",
		recordId || "recsVpmZaPJ709OTQ",
		apiKey
	);
	console.log({ record, loading, error });
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Hero title={record.Name || "-"} />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
