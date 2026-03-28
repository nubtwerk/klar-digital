import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const errors: Record<string, string> = {};
  if (!body.navn?.trim()) errors.navn = "Navn er påkrevd";
  if (!body.epost?.trim()) {
    errors.epost = "E-post er påkrevd";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.epost)) {
    errors.epost = "Ugyldig e-postadresse";
  }
  if (!body.melding?.trim()) errors.melding = "Melding er påkrevd";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // MVP: Log the contact submission. In production, send email or save to DB.
  console.log("Ny kontakthenvendelse:", {
    navn: body.navn,
    epost: body.epost,
    telefon: body.telefon || "",
    melding: body.melding,
    tidspunkt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
