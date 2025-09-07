import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?from=${currency.toUpperCase()}`
        );
        if (!res.ok) throw new Error("Failed to fetch rates");

        const json = await res.json();
        setData(json.rates); // ✅ only rates object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currency]);

  return { rates: data, loading, error };
}

export default useCurrencyInfo;
