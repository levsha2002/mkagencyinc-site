// Hero image library for the daily rotation. Pure data.
//
// - New photos live in public/images/hero/<type>-NN.webp (1440x900 WebP, q68).
//   Sources and licenses: content/hero/CREDITS.md (Unsplash License: free for
//   commercial use, no attribution required; credited there anyway).
// - Older site images (public/images/*.jpg) are reused where they fit.
// - Rules: South Florida feel, no logos/brands, no celebrities, no text in the
//   image. Alt text in all three languages (describe the photo, no keywords stuffing).
//
// To add a photo: drop the file in public/images/hero/, add an entry below with
// its real pixel size, then add its key to one or more pools in ./pools.ts.
import type { Lang } from '../types';

export interface HeroImage {
  src: string;
  width: number;
  height: number;
  alt: Record<Lang, string>;
}

const W = 1440;
const H = 900;
const hero = (file: string, en: string, es: string, ru: string): HeroImage => ({
  src: `/images/hero/${file}.webp`, width: W, height: H, alt: { en, es, ru },
});
const legacy = (file: string, width: number, height: number, en: string, es: string, ru: string): HeroImage => ({
  src: `/images/${file}`, width, height, alt: { en, es, ru },
});

export const HERO_IMAGES = {
  // ---- existing site images ----
  'legacy-porch-family': legacy('hero-1.jpg', 1152, 864, 'Three generations of a Florida family relaxing on their front porch', 'Tres generaciones de una familia de Florida descansando en el portal de su casa', 'Три поколения флоридской семьи отдыхают на крыльце своего дома'),
  'legacy-keys-bridge': legacy('hero-2.jpg', 1280, 720, 'A car crossing a bridge over turquoise water in the Florida Keys', 'Un auto cruzando un puente sobre aguas turquesa en los Cayos de Florida', 'Машина едет по мосту над бирюзовой водой на Флорида-Кис'),
  'legacy-home-sunset': legacy('hero-3.jpg', 1152, 864, 'A Florida home with palm trees at sunset', 'Una casa de Florida con palmeras al atardecer', 'Дом во Флориде с пальмами на закате'),
  'legacy-family-home': legacy('Family_at_home.jpg', 1152, 864, 'A Florida family in front of their home', 'Una familia de Florida frente a su casa', 'Семья во Флориде перед своим домом'),
  'legacy-agent-office': legacy('Professional_Agent.jpg', 1152, 864, 'An insurance agent reviewing a policy with a couple in a bright office', 'Una agente de seguros revisando una póliza con una pareja en una oficina luminosa', 'Страховой агент разбирает полис с парой в светлом офисе'),
  'legacy-sunset-highway': legacy('cat-auto.jpg', 1280, 720, 'Cars on a palm-lined Florida highway at sunset', 'Autos en una autopista de Florida bordeada de palmeras al atardecer', 'Машины на флоридском шоссе среди пальм на закате'),
  'legacy-palm-street': legacy('cat-home.jpg', 1280, 720, 'A quiet South Florida street lined with homes and palm trees', 'Una calle tranquila del sur de Florida con casas y palmeras', 'Тихая улица в Южной Флориде с домами и пальмами'),
  'legacy-beach-family': legacy('cat-life.jpg', 1280, 720, 'A multigenerational family walking on the beach at sunset', 'Una familia de varias generaciones caminando por la playa al atardecer', 'Большая семья гуляет по пляжу на закате'),
  'legacy-parked-cars': legacy('gap-auto.jpg', 1152, 864, 'Cars parked along a sunny street with palm trees', 'Autos estacionados en una calle soleada con palmeras', 'Машины у тротуара на солнечной улице с пальмами'),
  'legacy-condo-building': legacy('gap-home.jpg', 1152, 864, 'A low-rise condo building with balconies and palm trees', 'Un edificio de condominios de pocos pisos con balcones y palmeras', 'Невысокий кондоминиум с балконами и пальмами'),
  'legacy-family-table': legacy('gap-life.jpg', 1152, 864, 'Parents and children doing homework together at the kitchen table', 'Padres e hijos haciendo la tarea juntos en la mesa de la cocina', 'Родители с детьми делают уроки за кухонным столом'),

  // ---- auto ----
  'auto-01': hero('auto-01', 'View from the back seat of a family driving down an open road', 'Vista desde el asiento trasero de una familia manejando por la carretera', 'Вид с заднего сиденья: семья едет по пустой дороге'),
  'auto-02': hero('auto-02', 'A father and his two daughters by their car under a palm tree', 'Un padre y sus dos hijas junto a su auto bajo una palmera', 'Отец с двумя дочерьми у машины под пальмой'),
  'auto-03': hero('auto-03', 'Two people holding hands in the front seats of a car', 'Dos personas tomadas de la mano en los asientos delanteros de un auto', 'Двое держатся за руки на передних сиденьях машины'),
  'auto-04': hero('auto-04', 'A woman driving with the sunroof open', 'Una mujer manejando con el techo solar abierto', 'Женщина за рулём с открытым люком'),
  'auto-05': hero('auto-05', 'A car driving down an avenue lined with tall royal palms', 'Un auto por una avenida bordeada de altas palmas reales', 'Машина едет по аллее высоких королевских пальм'),
  'auto-06': hero('auto-06', 'A residential street lined with palm trees and parked cars', 'Una calle residencial con palmeras y autos estacionados', 'Жилая улица с пальмами и припаркованными машинами'),
  'auto-07': hero('auto-07', 'Cars parked under palm trees on a sunny day', 'Autos estacionados bajo las palmeras en un día soleado', 'Машины на парковке под пальмами в солнечный день'),
  'auto-08': hero('auto-08', 'A long highway bridge stretching over the water', 'Un largo puente de autopista sobre el mar', 'Длинный мост шоссе над водой'),
  'auto-09': hero('auto-09', 'A red car crossing a cable-stayed bridge as a plane flies overhead', 'Un auto rojo cruzando un puente atirantado mientras pasa un avión', 'Красная машина на вантовом мосту, над ней пролетает самолёт'),
  'auto-10': hero('auto-10', 'A quiet palm-lined street on a bright day', 'Una calle tranquila con palmeras en un día luminoso', 'Тихая улица с пальмами в ясный день'),
  'auto-11': hero('auto-11', 'A palm-lined road with a car parked in the shade', 'Una calle con palmeras y un auto estacionado a la sombra', 'Дорога с пальмами и машиной в тени'),
  'auto-12': hero('auto-12', 'A driver with both hands on the wheel on a sunny road', 'Un conductor con ambas manos en el volante en una carretera soleada', 'Водитель держит руль обеими руками на солнечной дороге'),

  // ---- homeowners ----
  'home-01': hero('home-01', 'A white two-story home with a green lawn and palm trees', 'Una casa blanca de dos pisos con césped verde y palmeras', 'Белый двухэтажный дом с зелёным газоном и пальмами'),
  'home-02': hero('home-02', 'A Mediterranean-style home surrounded by palms and tropical plants', 'Una casa de estilo mediterráneo rodeada de palmeras y plantas tropicales', 'Дом в средиземноморском стиле среди пальм и тропических растений'),
  'home-03': hero('home-03', 'A blue house with a front porch and palm trees', 'Una casa azul con portal y palmeras', 'Голубой дом с крыльцом и пальмами'),
  'home-04': hero('home-04', 'A single-story home behind a lawn and a row of palm trees', 'Una casa de un piso detrás de un césped y una fila de palmeras', 'Одноэтажный дом за газоном и рядом пальм'),
  'home-05': hero('home-05', 'A backyard pool with lounge chairs beside a white home', 'Una piscina en el patio con tumbonas junto a una casa blanca', 'Бассейн во дворе с шезлонгами у белого дома'),
  'home-06': hero('home-06', 'A waterfront home with a private dock and palm trees', 'Una casa frente al agua con muelle privado y palmeras', 'Дом у воды с собственным причалом и пальмами'),
  'home-07': hero('home-07', 'A historic home with a pool surrounded by palm trees', 'Una casa histórica con piscina rodeada de palmeras', 'Старинный дом с бассейном в окружении пальм'),
  'home-08': hero('home-08', 'A pink coastal home with palm trees in the evening light', 'Una casa costera rosada con palmeras a la luz de la tarde', 'Розовый дом на побережье с пальмами в вечернем свете'),
  'home-09': hero('home-09', 'A waterfront house nestled among tropical trees', 'Una casa frente al agua entre árboles tropicales', 'Дом у воды среди тропических деревьев'),
  'home-10': hero('home-10', 'A backyard pool and shade tree under a clear blue sky', 'Una piscina en el patio y un árbol de sombra bajo un cielo azul', 'Бассейн во дворе и тенистое дерево под ясным небом'),
  'home-11': hero('home-11', 'A single-story stucco home with palm trees at dusk', 'Una casa de estuco de un piso con palmeras al anochecer', 'Одноэтажный оштукатуренный дом с пальмами в сумерках'),
  'home-12': hero('home-12', 'A new single-story home with a garage and palm trees', 'Una casa nueva de un piso con garaje y palmeras', 'Новый одноэтажный дом с гаражом и пальмами'),

  // ---- condo ----
  'condo-01': hero('condo-01', 'High-rise condo towers behind coconut palms', 'Torres de condominios detrás de palmas de coco', 'Высотные кондоминиумы за кокосовыми пальмами'),
  'condo-02': hero('condo-02', 'White condo towers framed by palm trees', 'Torres de condominios blancas enmarcadas por palmeras', 'Белые кондо-башни в обрамлении пальм'),
  'condo-03': hero('condo-03', 'Aerial view of waterfront condo buildings and a marina', 'Vista aérea de edificios de condominios frente al mar y una marina', 'Вид сверху на кондоминиумы у воды и марину'),
  'condo-04': hero('condo-04', 'A rooftop pool deck with city towers in the background', 'Una piscina en la azotea con torres de la ciudad al fondo', 'Бассейн на крыше на фоне городских башен'),
  'condo-05': hero('condo-05', 'Condo towers rising above a line of palm trees by the water', 'Torres de condominios sobre una fila de palmeras junto al agua', 'Кондо-башни над рядом пальм у воды'),
  'condo-06': hero('condo-06', 'A palm-lined waterfront walkway beside residential towers', 'Un paseo frente al agua con palmeras junto a torres residenciales', 'Набережная с пальмами рядом с жилыми башнями'),
  'condo-07': hero('condo-07', 'Glass residential towers and palm trees under a blue sky', 'Torres residenciales de cristal y palmeras bajo un cielo azul', 'Стеклянные жилые башни и пальмы под голубым небом'),
  'condo-08': hero('condo-08', 'A woman on her condo balcony looking out at the ocean', 'Una mujer en el balcón de su condominio mirando el mar', 'Женщина на балконе своей квартиры смотрит на океан'),
  'condo-09': hero('condo-09', 'A bright condo dining room with floor-to-ceiling ocean views', 'Un comedor luminoso de condominio con ventanales hacia el mar', 'Светлая столовая в кондо с панорамными окнами на океан'),
  'condo-10': hero('condo-10', 'A blue condo building behind palm trees and flowers', 'Un edificio de condominios azul detrás de palmeras y flores', 'Голубой кондоминиум за пальмами и цветами'),
  'condo-11': hero('condo-11', 'A mid-rise condo building with balconies and a palm tree', 'Un edificio de condominios de altura media con balcones y una palmera', 'Среднеэтажный кондоминиум с балконами и пальмой'),
  'condo-12': hero('condo-12', 'A condo pool reflecting palm trees and towers', 'Una piscina de condominio que refleja palmeras y torres', 'Бассейн кондоминиума, в котором отражаются пальмы и башни'),
  'condo-13': hero('condo-13', 'Waterfront condo buildings and palms along the seawall', 'Edificios de condominios y palmeras junto al malecón', 'Кондоминиумы и пальмы вдоль набережной'),
  'condo-14': hero('condo-14', 'A pink mid-century condo building with palm trees', 'Un edificio de condominios rosado de mediados de siglo con palmeras', 'Розовый кондоминиум середины века с пальмами'),
  'condo-15': hero('condo-15', 'Beachfront condo buildings behind the dunes and palms', 'Edificios de condominios frente a la playa detrás de dunas y palmeras', 'Кондоминиумы на первой линии за дюнами и пальмами'),
  'condo-16': hero('condo-16', 'Coastal townhomes with balconies and palm trees', 'Casas adosadas costeras con balcones y palmeras', 'Таунхаусы на побережье с балконами и пальмами'),

  // ---- small business ----
  'commercial-01': hero('commercial-01', 'A smiling deli owner behind his counter', 'El dueño sonriente de una charcutería detrás de su mostrador', 'Улыбающийся владелец гастронома за прилавком'),
  'commercial-02': hero('commercial-02', 'A small business owner smiling in his shop', 'Un dueño de negocio sonriendo en su tienda', 'Владелец небольшого бизнеса улыбается в своём магазине'),
  'commercial-03': hero('commercial-03', 'A designer on the phone at her studio workbench', 'Una diseñadora hablando por teléfono en su taller', 'Дизайнер говорит по телефону в своей мастерской'),
  'commercial-04': hero('commercial-04', 'Two cafe owners standing proudly behind their counter', 'Dos dueños de café de pie, orgullosos, detrás de su mostrador', 'Двое владельцев кафе с гордостью стоят за стойкой'),
  'commercial-05': hero('commercial-05', 'A potter working at his wheel in a ceramics studio', 'Un alfarero trabajando en el torno en su taller de cerámica', 'Гончар работает за кругом в своей мастерской'),
  'commercial-06': hero('commercial-06', 'A business owner working on a laptop in her office', 'Una empresaria trabajando en su computadora en la oficina', 'Предпринимательница работает за ноутбуком в офисе'),
  'commercial-07': hero('commercial-07', 'A smiling potter in his workshop', 'Un alfarero sonriente en su taller', 'Улыбающийся гончар в своей мастерской'),
  'commercial-08': hero('commercial-08', 'A barista pouring steamed milk at a coffee shop', 'Un barista sirviendo leche vaporizada en una cafetería', 'Бариста наливает молоко в кофейне'),
  'commercial-09': hero('commercial-09', 'A cheerful business owner sitting at her shop counter', 'Una alegre dueña de negocio sentada en el mostrador de su local', 'Жизнерадостная владелица бизнеса за стойкой своего заведения'),
  'commercial-10': hero('commercial-10', 'A laughing restaurant owner in her kitchen', 'La dueña de un restaurante riendo en su cocina', 'Смеющаяся владелица ресторана на своей кухне'),
  'commercial-11': hero('commercial-11', 'A cafe owner making coffee behind the counter', 'La dueña de un café preparando café detrás del mostrador', 'Владелица кафе готовит кофе за стойкой'),
  'commercial-12': hero('commercial-12', 'A shop owner in an apron standing in her store', 'Una comerciante con delantal de pie en su tienda', 'Владелица магазина в фартуке в своём магазине'),
  'commercial-13': hero('commercial-13', 'A smiling restaurant owner in his dining room', 'Un dueño de restaurante sonriendo en su comedor', 'Улыбающийся владелец ресторана в своём зале'),
  'commercial-14': hero('commercial-14', 'A baker proudly holding a freshly decorated cake', 'Una repostera mostrando con orgullo un pastel recién decorado', 'Кондитер с гордостью держит только что украшенный торт'),
  'commercial-15': hero('commercial-15', 'A baker holding a tray of fresh pastries', 'Un panadero sosteniendo una bandeja de pasteles recién hechos', 'Пекарь держит поднос со свежей выпечкой'),
  'commercial-16': hero('commercial-16', 'A florist arranging a bouquet in her shop', 'Una florista armando un ramo en su tienda', 'Флорист собирает букет в своём магазине'),
  'commercial-17': hero('commercial-17', 'A veteran mechanic smiling in his auto repair shop', 'Un mecánico veterano sonriendo en su taller', 'Опытный механик улыбается в своей автомастерской'),

  // ---- family / life ----
  'family-01': hero('family-01', 'A family sharing dinner together at home', 'Una familia compartiendo la cena en casa', 'Семья вместе ужинает дома'),
  'family-02': hero('family-02', 'Parents holding their two young children outdoors', 'Padres cargando a sus dos hijos pequeños al aire libre', 'Родители держат на руках двоих малышей на природе'),
  'family-03': hero('family-03', 'A family walking hand in hand along the beach', 'Una familia caminando de la mano por la playa', 'Семья идёт по пляжу, держась за руки'),
  'family-04': hero('family-04', 'A mother carrying her son by the ocean at sunset', 'Una madre cargando a su hijo junto al mar al atardecer', 'Мама с сыном на руках у океана на закате'),
  'family-05': hero('family-05', 'A father swinging his child at the pier at sunset', 'Un padre haciendo volar a su hijo en el muelle al atardecer', 'Отец кружит ребёнка на пирсе на закате'),
  'family-06': hero('family-06', 'A family standing together at the water’s edge', 'Una familia junta a la orilla del mar', 'Семья стоит вместе у кромки воды'),
  'family-07': hero('family-07', 'A grandmother laughing with her grown children', 'Una abuela riendo con sus hijos ya adultos', 'Бабушка смеётся вместе со взрослыми детьми'),
  'family-08': hero('family-08', 'Grandparents, parents and grandchildren posing together', 'Abuelos, padres y nietos posando juntos', 'Бабушка с дедушкой, родители и внуки вместе'),
  'family-09': hero('family-09', 'A grandfather holding his baby grandson', 'Un abuelo cargando a su nieto bebé', 'Дедушка держит на руках маленького внука'),
  'family-10': hero('family-10', 'A family sharing a snack on their front porch', 'Una familia merendando en el portal de su casa', 'Семья перекусывает на крыльце своего дома'),
  'family-11': hero('family-11', 'A father holding his daughter at the beach', 'Un padre cargando a su hija en la playa', 'Отец с дочкой на руках на пляже'),
  'family-12': hero('family-12', 'Young parents hugging their toddler outdoors', 'Padres jóvenes abrazando a su hijo pequeño al aire libre', 'Молодые родители обнимают малыша на улице'),
  'family-13': hero('family-13', 'A mother and her daughters in a sunny field', 'Una madre y sus hijas en un campo soleado', 'Мама с дочерьми на солнечном поле'),
  'family-14': hero('family-14', 'A family enjoying a picnic in the park', 'Una familia disfrutando de un picnic en el parque', 'Семья на пикнике в парке'),
} satisfies Record<string, HeroImage>;

export type HeroImageKey = keyof typeof HERO_IMAGES;
