const config = require("config.json");
const db = require("_helpers/db");

module.exports = {
  create,
  getAll,
  getById,
  saveAll,
};

async function create(params) {
  // validate
  if (await db.Game.findOne({ where: { name: params.name } })) {
    throw 'Game Name "' + params.name + '" is already taken';
  }

  // if (!params.hasOwnProperty("profilePicURL"))
  //     params.profilePicURL = ''
  // save user
  await db.Game.create(params);
}

async function getAll() {
  return await db.Game.findAll();
}

async function saveAll(params) {
  // truncate games
  await db.Game.destroy({
    where: {},
    truncate: true,
  });

  // save games
  await db.Game.bulkCreate(params);
}

async function getById(id) {
  const game = await db.Game.findByPk(id);
  if (!game) throw "Game not found";
  return game;
}
