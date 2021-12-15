import './App.css';
import Card from './card';

function App() {
  return (
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
      <Card 
      type="FREE"
      price="$0"
      value1="Single User"
      value2="5GB Storage"
      value3="Unlimited Public Projects"
      text1="text-muted"
      text2="text-muted"
      text3="text-muted"
      text4="text-muted"
      icon1="fas fa-times"
      icon2="fas fa-times"
      icon3="fas fa-times"
      icon4="fas fa-times"
      ></Card>

      <Card 
      type="PLUS"
      price="$9"
      value1="5 Users"
      value2="50GB Storage"
      value3="Unlimited Public Projects"
      text4="text-muted"
      icon1="fas fa-check"
      icon2="fas fa-check"
      icon3="fas fa-check"
      icon4="fas fa-times"
      ></Card>

      <Card 
      type="PRO"
      price="$49"
      value1="Unlimited Users"
      value2="150GB Storage"
      value3="Unlimited Public Projects"
      icon1="fas fa-check"
      icon2="fas fa-check"
      icon3="fas fa-check"
      icon4="fas fa-check"
      ></Card>
    </div>
  </div>
</section>
  );
}

export default App;
