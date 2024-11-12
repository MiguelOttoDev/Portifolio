// Importando os módulos do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCtMPfj599RcDofA2A-GVPHzIwAvqoDNl4",
  authDomain: "portifolio-5db91.firebaseapp.com",
  projectId: "portifolio-5db91",
  storageBucket: "portifolio-5db91.firebasestorage.app",
  messagingSenderId: "685344725375",
  appId: "1:685344725375:web:74cc649140fa8f0a97624a",
  measurementId: "G-LDZSBJZ37J"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para enviar dados para o Firestore
const sendMessage = async (name, email, message) => {
  try {
    // Logando os dados para debug
    console.log("Enviando dados:", { name, email, message });

    // Adiciona o documento à coleção 'messages' no Firestore
    const docRef = await addDoc(collection(db, 'messages'), {
      name: name,
      email: email,
      message: message,
      timestamp: serverTimestamp(), // Adiciona o timestamp automaticamente
    });

    // Log de sucesso
    console.log("Mensagem enviada com sucesso, ID do documento:", docRef.id);
  } catch (error) {
    // Log de erro
    console.error("Erro ao enviar a mensagem:", error);
  }
};

// Exportando tanto a função de envio de mensagem quanto o app
export { sendMessage, app };
