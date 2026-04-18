import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CompetenciaCard from './components/CompetenciaCard';

type Competencia = {
  id: number;
  titulo: string;
  descricao: string;
  descricaoLonga: string;
};

const competencias: Competencia[] = [
  { id: 1, titulo: 'HTML', descricao: 'Estruturação de páginas web', descricaoLonga: 'HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar páginas web. Ele define a estrutura e o conteúdo de uma página, usando elementos como headings, paragraphs, links, images, forms, etc. Essencial para qualquer desenvolvedor web, permite criar a base de sites responsivos e acessíveis.' },
  { id: 2, titulo: 'CSS', descricao: 'Estilização e layouts responsivos', descricaoLonga: 'CSS (Cascading Style Sheets) é usado para descrever a apresentação de um documento escrito em HTML. Controla layout, cores, fontes, espaçamento e responsividade. Permite criar designs atraentes e consistentes, com técnicas como Flexbox e Grid para layouts modernos.' },
  { id: 3, titulo: 'JavaScript', descricao: 'Lógica e interatividade', descricaoLonga: 'JavaScript é uma linguagem de programação interpretada, usada principalmente no desenvolvimento web para adicionar interatividade às páginas. Permite manipular o DOM, fazer requisições assíncronas (AJAX), validar forms e criar aplicações dinâmicas. Essencial para front-end e back-end com Node.js.' },
  { id: 4, titulo: 'React', descricao: 'Construção de interfaces', descricaoLonga: 'React é uma biblioteca JavaScript para construir interfaces de usuário. Baseado em componentes reutilizáveis, usa um DOM virtual para otimizar performance. Permite criar aplicações web escaláveis com hooks, context API e roteamento. Amplamente usado em desenvolvimento front-end moderno.' },
  { id: 5, titulo: 'React Native', descricao: 'Apps mobile multiplataforma', descricaoLonga: 'React Native é um framework para desenvolvimento de aplicações móveis nativas usando JavaScript e React. Permite criar apps para iOS e Android com um único código-base. Usa componentes nativos, suporte a APIs de dispositivo e integração com Expo para facilitar o desenvolvimento.' },
  { id: 6, titulo: 'C#', descricao: 'Programação orientada a objetos', descricaoLonga: 'C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft. Usada no .NET Framework para criar aplicações desktop, web, mobile e jogos. Suporta programação assíncrona, LINQ para consultas e forte tipagem, ideal para sistemas empresariais e Unity para jogos.' },
];

export default function Home() {
  return (
    <View style={styles.background}>
      <Image source={require('../assets/images/react1.png')} style={styles.backgroundImage} />
      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Portfólio de Competências</Text>
            <Text style={styles.mainTitle}>William Martins</Text>
            <Text style={styles.mainTitle}>5° ENG. Software</Text>
          </View>
          {competencias.map((item) => (
            <CompetenciaCard
              key={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
              descricaoLonga={item.descricaoLonga}
            />
          ))}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#030e42ff',
  },
  contentContainer: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
    position: 'absolute',
    top: '15%',
    left: '15%',
    backgroundColor: '#a03909ff',
    borderRadius: 30,
  },
  scrollViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 50,
    alignItems: 'center',
    width: '50%',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0774a7ff',
  },
  titleContainer: {
    backgroundColor: '#d3d3ceff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
});