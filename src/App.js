import React from "react";
import Hero from "./components/Hero";
import {
	useAirtableRecord,
	useAirtableDataFromURLParams,
} from "./hooks/useAirtableHooks";
function App() {
	const apiKey = process.env.REACT_APP_API_KEY;
	console.log({ apiKey });
	const { data, loading, error } = useAirtableDataFromURLParams(apiKey);
	console.log({ data, loading, error });
	return <Hero />;
}

export default App;
