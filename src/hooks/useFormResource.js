import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "api";

export const useFormResource = ({ resource, id }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    let isMounted = true;
    api
      .get(`/${resource}/${id}`)
      .then((res) => {
        if (isMounted) setName(res.data[resource.slice(0, -1)].name);
      })
      .catch((err) => {
        console.error(`Failed to fetch ${resource} => `, err);
        navigate("/server-failed");
      });

    return () => (isMounted = false);
  }, [id, resource, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await (id
        ? api.put(`/${resource}/${id}`, { name })
        : api.post(`/${resource}`, { name }));

      if (response.data.status === "success") {
        navigate(`/${resource}`);
      } else {
        navigate("/server-failed");
      }
    } catch (err) {
      console.error(
        `Failed to ${id ? "update" : "create"} ${resource} => `,
        err,
      );
      setError(`* ${err?.response?.data?.message || "Something went wrong."}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    if (error) setError("");
  };

  return { name, setName, loading, error, handleSubmit, handleChange };
};
