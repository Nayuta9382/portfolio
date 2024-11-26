import H2 from "@/components/common/heading/H2";
import H3 from "@/components/common/heading/H3";
import List from "@/components/common/List";
import ListItem from "@/components/common/ListItem";
import Text from "@/components/common/Text";


export default function Home() {
  return (  
    <>
      <List>
        <ListItem>熊谷奈友多</ListItem>
        <ListItem>２文メデス</ListItem>
        <ListItem>３文メデス</ListItem>
      </List>
      <Text lavel="main">メイン</Text>
      <Text lavel="heading">見出し</Text>
      <H2>H2です</H2>
      <H3>H2です</H3>
     
    </>
  );
}
