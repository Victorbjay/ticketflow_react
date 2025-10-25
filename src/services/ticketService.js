// src/services/ticketService.js
const KEY = 'ticketapp_tickets';
const DELAY = 350;
let SIMULATE_FAIL = false; // flip via setSimulateFail(true) in DevTools to test errors

export function setSimulateFail(v) { SIMULATE_FAIL = !!v; }

function delay(ms = DELAY) {
  return new Promise((res) => setTimeout(res, ms));
}
function maybeFail() {
  if (SIMULATE_FAIL) throw new Error('Failed to load tickets. Please retry.');
}

export async function getTickets() {
  await delay();
  maybeFail();
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function saveTickets(tickets) {
  await delay();
  maybeFail();
  localStorage.setItem(KEY, JSON.stringify(tickets));
  return true;
}
