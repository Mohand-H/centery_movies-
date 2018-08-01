-- Requete pour ajouter un filme
INSERT INTO movies
  (idmovies, title, release_date, director, with_, kinds, press_note, spectator_note, description, poster, video)
VALUES
  ('1', 'Mission: Impossible - Fallout', '2018-08-01', 'Christopher McQuarrie', '
Avec Tom Cruise, Henry Cavill, Rebecca Ferguson', 'Action, Espionnage, Thriller', '4', '3', 'Les meilleures intentions finissent souvent par se retourner contre vous… 
Dans MISSION : IMPOSSIBLE – FALLOUT, Ethan Hunt accompagné de son équipe de l’IMF – Impossible Mission Force et de quelques fidèles alliées sont lancés dans une course contre la montre, suite au terrible échec d’une mission.', "https://www.filmographie.net/wp-content/uploads/2018/05/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg", "http://www.allocine.fr/video/player_gen_cmedia=19578459&cfilm=238132.html")

INSERT INTO movies
SET title
='', 
        release_date ='', 
        director ='', 
        with_ ='', 
        kinds ='', 
        press_note ='', 
        spectator_note ='', 
        description ='', 
        poster ='', 
        video ='',

-- Requete pour voir (lire) tout les filmes
SELECT *
FROM movies;


-- Requete pour voir (lire) un seul filme
SELECT *
FROM movies
WHERE id=x;


-- Requete pour mettre à jour un filme
UPDATE movies
SET title = '',
  release_date = '',
  director = '',
  with_ = '',
  kinds = '',
  press_note = '',
  spectator_note = '',
  description = '',
  poster = '',
  video = ''  
WHERE id = x;


-- Requete pour suprimer un filme