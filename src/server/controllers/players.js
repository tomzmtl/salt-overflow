import db from '../models/index';


export default null;


export const findAll = (req, res) => {
  db.Players.findAll()
    .then((result) => {
      if (!result.length) {
        res.status(400).send('Could not find any player.');
      }
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(`Could not execute request for GET players: ${err}`);
    });
};

export const add = (req, res) => {
  const newPlayer = req.body;

  db.Players.build(newPlayer).save()
    .then((createdPlayer) => {
      res.send(`Successfully added the player: ${JSON.stringify(createdPlayer)}`);
    })
    .catch((err) => {
      res.status(400).send(`Could not add the player: ${err}`);
    });
};

export const findById = (req, res) => {
  const { id } = req.params;

  db.Players.findById(id)
    .then((result) => {
      if (!result) {
        res.status(404).send(`Could not find any player with the id '${id}'`);
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(`Could not execute GET player by id query: ${err}`);
    });
};


export const update = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  db.Players.findById(id)
    .then((result) => {
      if (!result) {
        res.status(404).send(`Could not find any player with the id '${id}'`);
      }
      result.updateAttributes(updates)
        .then(() => {
          res.send(`Successfully updated the player with the id '${id}'`);
        })
        .catch((err) => {
          res.status(500).send(`Could not execute PUT player by id query: ${err}`);
        });
    })
    .catch((err) => {
      res.status(500).send(`Could not execute GET player by id query: ${err}`);
    });
};

export const deletePlayer = (req, res) => {
  const { id } = req.params;
  db.Players.findById(id)
    .then((result) => {
      if (!result) {
        res.status(404).send(`Could not find any player with the id '${id}'`);
      }
      result.destroy();
      res.send(`Successfully deleted the player with the id '${id}'`);
    })
    .catch((err) => {
      res.status(500).send(`Could not execute GET player by id query: ${err}`);
    });
};
