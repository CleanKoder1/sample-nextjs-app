import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const pendientes = [
      { name: "Grabar el tutorial" },
      { name: "Subir al canal el tutorial" },
      { name: "Deployar en vercel" },
      { name: "Agregar dominio" },
    ];
    return NextResponse.json({
      success: false,
      message: "Successfully data retrieved",
      data: {
        pendientes,
      },
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
      data: null,
    });
  }
}
