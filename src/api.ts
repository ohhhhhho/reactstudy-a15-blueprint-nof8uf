const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

export async function CharactersApi() {
  return await (await fetch(`${BASE_URL}`)).json();
}

export async function CharactersInfoApi(id: string | undefined) {
  return await (await fetch(`${BASE_URL}/${id}`)).json();
}
