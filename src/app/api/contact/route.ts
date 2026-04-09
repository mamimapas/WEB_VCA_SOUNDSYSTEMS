import { NextRequest, NextResponse } from "next/server";

export interface ContactPayload {
  // Step 1
  tipoEvento: string;
  // Step 2
  asistentes: string;
  // Step 3
  servicios: string[];
  // Step 4
  duracion: string;
  // Step 5
  nombre: string;
  empresa?: string;
  email: string;
  telefono: string;
  fechaEvento?: string;
  lugar?: string;
  mensaje?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // TODO: conectar con Supabase cuando Miguel proporcione las credenciales.
    // Ejemplo de insert:
    // const { error } = await supabase.from("vca_leads").insert([{
    //   tipo_evento: body.tipoEvento,
    //   asistentes: body.asistentes,
    //   servicios: body.servicios,
    //   duracion: body.duracion,
    //   nombre: body.nombre,
    //   empresa: body.empresa,
    //   email: body.email,
    //   telefono: body.telefono,
    //   fecha_evento: body.fechaEvento,
    //   lugar: body.lugar,
    //   mensaje: body.mensaje,
    //   created_at: new Date().toISOString(),
    // }]);

    // TODO: enviar email a ecentenorobles@gmail.com via Resend cuando tenga API key.
    // Ejemplo: await resend.emails.send({ from: "...", to: "ecentenorobles@gmail.com", subject: `Nuevo lead: ${body.nombre}`, ... })

    console.log("[VCA Contact] Nuevo lead recibido:", {
      tipoEvento: body.tipoEvento,
      asistentes: body.asistentes,
      servicios: body.servicios,
      duracion: body.duracion,
      nombre: body.nombre,
      empresa: body.empresa ?? "-",
      email: body.email,
      telefono: body.telefono,
      fechaEvento: body.fechaEvento ?? "-",
      lugar: body.lugar ?? "-",
      mensaje: body.mensaje ?? "-",
    });

    return NextResponse.json(
      { success: true, message: "Solicitud recibida correctamente" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[VCA Contact] Error al procesar lead:", err);
    return NextResponse.json(
      { success: false, message: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
