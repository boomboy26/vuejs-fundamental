<template>
  <h1>Monster</h1>
  <div id="game">
    <section id="monster" class="container">
      <h2>Monster Health</h2>
      <div class="healthbar">
        <div class="healthbar__value" :style="styleMonsterHealth"></div>
      </div>
    </section>
    <section id="player" class="container">
      <h2>Your Health</h2>
      <div class="healthbar">
        <div class="healthbar__value" :style="stylePlayerHealth"></div>
      </div>
    </section>
    <section id="controls" v-if="!surrender">
      <button @click="attackMonster" :disabled="disableButton">ATTACK</button>
      <button
        @click="specialAttack"
        :disabled="disableSpecialAttack || disableButton"
      >
        SPECIAL ATTACK
      </button>
      <button @click="heal" :disabled="disableButton">HEAL</button>
      <button @click="surrender = true">SURRENDER</button>
    </section>
    <section class="container" v-else>
      <h3>You {{ monsterHealth === 0 ? 'Win !!' : 'Lose !!' }}</h3>
      <button @click="newGame">New Game</button>
    </section>
    <section id="log" class="container">
      <h2>Battle Log</h2>
      <ul>
        <li v-for="(battle, index) in battles" :key="index">
          <span
            :class="{
              'log--monster': battle.who === 'monster',
              'log--player': battle.who === 'player',
            }"
            >{{ battle.who }}</span
          >
          - {{ battle.what }} -
          <span
            :class="{
              'log--damage': battle.what === 'attack',
              'log--heal': battle.what === 'heal',
            }"
            >{{ battle.value }}</span
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MonsterSlayer',
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 1,
      surrender: false,
      battles: [],
    };
  },
  watch: {
    playerHealth() {
      if (this.playerHealth === 0) this.surrender = true;
    },
    monsterHealth() {
      if (this.monsterHealth === 0) this.surrender = true;
    },
  },
  computed: {
    styleMonsterHealth() {
      return { width: this.monsterHealth + '%' };
    },
    stylePlayerHealth() {
      return { width: this.playerHealth + '%' };
    },
    disableSpecialAttack() {
      return this.round % 3 !== 0;
    },
    disableButton() {
      return this.playerHealth === 0 || this.monsterHealth === 0;
    },
  },
  methods: {
    attackMonster() {
      const attackDmg = Math.floor(Math.random() * (12 - 5) + 5);

      if (this.monsterHealth - attackDmg < 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackDmg;
      }
      this.attackPlayer();
      this.battleLog('player', 'attack', attackDmg);
    },
    attackPlayer() {
      this.round++;
      const attackDmg = Math.floor(Math.random() * (15 - 8) + 8);

      if (this.playerHealth - attackDmg < 0) {
        this.playerHealth = 0;
      } else {
        this.playerHealth -= attackDmg;
      }
      this.battleLog('monster', 'attack', attackDmg);
    },
    specialAttack() {
      const attackDmg = Math.floor(Math.random() * (20 - 11) + 11);

      if (this.monsterHealth - attackDmg < 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackDmg;
      }
      this.attackPlayer();
      this.battleLog('player', 'special attack', attackDmg);
    },
    heal() {
      const healValue = Math.floor(Math.random() * (18 - 10) + 10);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
      this.battleLog('player', 'heal', healValue);
    },
    newGame() {
      this.surrender = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 1;
    },
    battleLog(who, what, value) {
      this.battles.push({ who: who, what: what, value: value });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #880017;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

#monster h2,
#player h2 {
  margin: 0.25rem;
}

#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}

#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.5rem 0;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>
