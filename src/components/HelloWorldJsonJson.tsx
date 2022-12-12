import useSWRMutation from "swr/mutation";
import { useState } from "react";

export const HelloWorldJsonJson: React.FunctionComponent = () => {
  const [name, setName] = useState("World");

  const { trigger, isMutating, data } = useSWRMutation(
    "/.netlify/functions/hello-world-json-json",
    async function sendRequest(url: string, { arg }) {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(arg),
      }).then((response) => {
        return response.json();
      });
    }
  );

  return (
    <article>
      <section>
        <label>
          Name:&nbsp;
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <button disabled={isMutating} onClick={() => trigger({ name })}>
          Send
        </button>
      </section>

      {data && (
        <section>
          <p>{data.message}</p>
        </section>
      )}
    </article>
  );
};
