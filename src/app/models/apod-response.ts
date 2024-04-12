export class ApodResponse {
    resource: any; // Puedes definir un tipo más específico si conoces la estructura exacta de este campo
    concept_tags?: boolean;
    title?: string;
    date?: string;
    url?: string;
    hdurl?: string | null; // La URL de alta resolución puede ser nula si no está disponible
    media_type?: 'image' | 'video'; // El tipo de media es 'image' o 'video'
    explanation?: string;
    concepts: string[]=[]; // Este campo es opcional y solo se incluye si concept_tags es true
    thumbnail_url?: string; // Este campo es opcional y solo se incluye si thumbs es true
    copyright?: string;
    service_version?: string;

}
