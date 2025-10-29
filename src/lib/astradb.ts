import { DataAPIClient } from "@datastax/astra-db-ts";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";

const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collection = process.env.ASTRA_DB_COLLECTION || "";
const hfApiKey = process.env.HUGGINGFACEHUB_API_KEY || "";

if (!token || !endpoint || !collection) {
  throw new Error(
    "Please set ASTRA_DB_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, and ASTRA_DB_COLLECTION environment variables.",
  );
}

export async function getVectorStore() {
  return AstraDBVectorStore.fromExistingIndex(
    new HuggingFaceInferenceEmbeddings({
      model: "sentence-transformers/all-MiniLM-L6-v2", // free embedding model
      apiKey: hfApiKey,
    }),
    {
      token,
      endpoint,
      collection,
      collectionOptions: {
        namespace: undefined, // prevent namespace error in latest DataStax client
        vector: { dimension: 384, metric: "cosine" }, // matches MiniLM-L6-v2
      },
    },
  );
}

export async function getEmbeddingsCollection() {
  const client = new DataAPIClient(token); // only token here
  const db = client.db(endpoint); // set the endpoint here
  return db.collection(collection);
}
