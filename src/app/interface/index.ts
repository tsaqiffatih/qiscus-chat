// Type untuk objek orang (people)
export type typePerson = {
    dataChat: string;
    img: string;
    name: string;
    time: string;
    preview: string;
};

// Type untuk pesan dalam percakapan (chats)
export type typeMessage = {
    type: 'you' | 'me'; // Tipe pesan, either 'you' (dari pengguna) atau 'me' (dari lawan bicara)
    text: string; // Isi pesan
};

// Type untuk percakapan (chats)
export type typeChat = {
    dataChat: string;
    start: string;
    messages: {
        type: 'you' | 'me';
        text: string;
    }[];
};

// Type untuk objek ruangan (room)
export type typeRoom = {
    name: string; // Nama ruangan
    id: number; // ID ruangan
    image_url: string; // URL gambar ruangan
    participant: typePerson[]; // Array partisipan ruangan
};

// Type untuk komentar (comments)
export type typeComments = {
    id: number; // ID komentar
    type: string; // Tipe komentar (misalnya: 'text', 'image', dll)
    message: string; // Isi komentar
    sender: string; // Pengirim komentar (ID partisipan)
};

// Type untuk objek hasil (results)
export type typeResults = {
    room: typeRoom; // Informasi ruangan
    comments: typeComments[]; // Array komentar
};

// Type untuk data JSON yang diberikan
export type typeJSONData = {
    results: typeResults; // Hasil dari data JSON
};
