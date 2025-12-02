const BASE_URL = "/api";

export async function apiPost(path, data) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    // WAJIB DITAMBAHKAN UNTUK MENGIRIM/MENERIMA COOKIES SESSION
    credentials: 'include', 
  });
  return res.json();
}

export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    // WAJIB DITAMBAHKAN UNTUK MENGIRIM COOKIES SESSION
    credentials: 'include', 
  });
  return res.json();
}