import "./App.css";
import { Speakerphone } from "@styled-icons/heroicons-outline/Speakerphone";
import { DotSingle } from "@styled-icons/entypo/DotSingle";
import styled from "styled-components";
import { Menu } from "./Menu";
import * as R from "ramda";
import { questions } from "./constants";
export const Home = () => {
  return (
    <header className="App-header">
      <Intro>
        <h1>Historias de protesta</h1>
        <WrapperEllipsisH>{R.repeat(<DotSingle />, 4)}</WrapperEllipsisH>
        <p>
          Mediante esta herramienta queremos escuchar las voces e historias de
          quienes desde diferentes trincheras nos enfrentamos a un momento
          histórico de Cali, ciudad que hoy queremos reconstruir junt@s y con
          mucha más empatía frente a lo que sienten y piensan otr@s
        </p>

        <ol>
          <li>Recuerda los últimos días desde el 28A</li>
          <li>
            Escribe palabras, ideas, pensamientos, emociones que se te ocurren
            en cada pregunta
          </li>
          <li>
            Queremos contarle al mundo cómo es la vida diaria de quienes se
            encuentran en nuestras calle hoy, cuéntanos
          </li>
        </ol>
        <WrapperSpeakerphone>
          <Speakerphone />
        </WrapperSpeakerphone>
      </Intro>

      <div className="questions">
        {questions.map((question, index) => (
          <Question>
            <span className="number">{index + 1}</span>
            <p>{question}</p>
          </Question>
        ))}

        <Menu isHome />
      </div>
    </header>
  );
};

const Box = styled.div`
  background: white;
  color: #282c34;
  margin: 20px 20px 30px;
  padding: 5px 15px;
  position: relative;
  box-shadow: 5px 5px;
`;

const Intro = styled(Box)`
  padding: 25px 25px 60px;
  text-align: center;
  flex: 1 0 0;

  @media screen and (min-width: 768px) {
    margin: 20px;
    font-size: 18px;
    padding: 15px;
  }

  h1 {
    margin: 0;
  }

  ol {
    text-align: left;
    list-style: none;
    counter-reset: my-awesome-counter;
    padding: 0;
  }

  li {
    margin: 0 0 15px;

    &::before {
      counter-increment: my-awesome-counter;
      margin: 0.25rem;
      content: counter(my-awesome-counter);
      background: #282c34;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: inline-block;
      line-height: 2rem;
      color: white;
      text-align: center;
      margin-right: 0.5rem;
      font-size: 20px;
    }
  }
`;

const Question = styled(Box)`
  box-shadow: 5px 5px #3588b1;
  flex: 0 0 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  .number {
    background: #282c34;
    color: #ffffff;
    padding: 15px;
    border-radius: 50%;
    position: absolute;
    left: -8px;
    top: -15px;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
  }
`;

const WrapperSpeakerphone = styled.div`
  position: absolute;
  bottom: -7%;
  width: 40%;
  right: 0;
  transform: rotate(23deg) scaleX(-1);

  svg {
    fill: white;
  }
  @media screen and (min-width: 768px) {
    bottom: -20%;
    width: 40%;
  }
`;

const WrapperEllipsisH = styled.div`
  width: 30%;
  margin: 15px auto 0;
  display: flex;
`;
