export default function Fetcher<T>(args: string) {
  return fetch(args).then((res) => res.json())
}
