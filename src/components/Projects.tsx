import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const categories = ['All Projects', '2D Floor Plans', '3D Elevations', 'Residential', 'Interiors'];

interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  services: string[];
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}

const projects: Project[] = [
  {
    id: 'p1',
    name: 'Modern Corner Villa — Elevation',
    category: '3D Elevations',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['3D Elevation', 'Exterior Design', 'Gate Design'],
    description:
      'A contemporary two-storey villa framed by a bold charcoal profile, with a cantilevered white balcony box, warm wood ceiling, textured stone feature wall with a tall glazed panel, and a black-and-wood slatted gate with LED-lit compound wall.',
    image: '/images/hero.jpg',
    size: 'large',
  },
  {
    id: 'p2',
    name: 'Four-Storey Residence — Elevation',
    category: '3D Elevations',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['3D Elevation', 'Facade Design', 'Landscape Planning'],
    description:
      'A four-storey contemporary residence with planter-lined balconies at every level, a granite-finish side column, wood-framed windows and a tall glazed stair window — a refined blend of modern aesthetics and green living.',
    image: '/images/elevation-4storey.jpg',
    size: 'medium',
  },
  {
    id: 'p3',
    name: 'Curved Balcony Villa — Elevation',
    category: '3D Elevations',
<<<<<<< HEAD
=======
    location: 'Andhra Pradesh',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['3D Elevation', 'Jali Screens', 'Compound Wall'],
    description:
      'A three-level villa with sweeping curved balconies in cream and charcoal, warm wood soffits with recessed lighting, a laser-cut jali panel, a grey marble feature wall and a wooden sliding gate set in a curved planter wall.',
    image: '/images/elevation-curved-villa.jpg',
    size: 'medium',
  },
  {
    id: 'p4',
    name: '20×70 Floor Plan — 2BHK',
    category: '2D Floor Plans',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['2D Floor Plan', 'Space Optimization', 'Parking Layout'],
    description:
      'A carefully dimensioned 20 ft × 70 ft layout with a 4 ft foyer corridor, living room, two bedrooms with attached toilets, kitchen and dining, puja room, utility garden and covered car parking with staircase.',
    image: '/images/plan-20x70.jpg',
    size: 'medium',
  },
  {
    id: 'p5',
    name: 'Granite & Wood Duplex — Elevation',
    category: '3D Elevations',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['3D Elevation', 'Exterior Design', 'Lighting Design'],
    description:
      'A two-storey elevation clad in grey granite-textured panels with vertical wood slats, LED wall washers, a glass-railed balcony with planters, a white laser-cut jali panel and a wooden slatted entrance gate.',
    image: '/images/elevation-granite-duplex.jpg',
    size: 'medium',
  },
  {
    id: 'p6',
    name: '38 ft Courtyard Plan — 2BHK',
    category: '2D Floor Plans',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['2D Floor Plan', 'Space Planning', 'Landscape Layout'],
    description:
      'A 38 ft wide plan organised around a central courtyard, with a 24×14 living space, drawing room, dining, kitchen with store, puja room, two bedrooms with attached toilets, parking and landscaped setbacks on all sides.',
    image: '/images/plan-38ft-courtyard.jpg',
    size: 'medium',
  },
  {
    id: 'p7',
    name: '3D Ground Floor Plan — 3BHK',
    category: '2D Floor Plans',
<<<<<<< HEAD
=======
    location: 'Andhra Pradesh',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['3D Floor Plan', 'Interior Layout', 'Furniture Planning'],
    description:
      'A rendered ground floor plan with a 25×17 living hall, kitchen and dining, master bedroom and two further bedrooms with attached toilets, and a portico with staircase beside the entrance gate.',
    image: '/images/plan-3d-ground-floor.jpg',
    size: 'medium',
  },
  {
    id: 'p8',
    name: 'Single-Storey Villa — Landscaped Court',
    category: 'Residential',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['Residential Design', 'Landscape Design', 'Compound Wall'],
    description:
      'A single-storey villa with a curved wood-and-jali entrance feature, covered car parking, a stepping-stone garden path, an outdoor lounge with umbrella and an LED-lit boundary wall with a wooden sliding gate.',
    image: '/images/villa-aerial.jpg',
    size: 'medium',
  },
  {
    id: 'p9',
    name: 'Villa Elevation A-68',
    category: '3D Elevations',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['3D Elevation', 'Exterior Design', 'Compound Wall'],
    description:
      'A two-storey villa with dark granite-veined cladding, vertical wood louvers, a pebble-textured feature column and a tall glazed stair window. A cantilevered balcony with jali detail and a black-and-wood sliding gate with the A-68 nameplate complete the frontage.',
    image: '/images/elevation-a68-villa.jpg',
    size: 'medium',
  },
  {
    id: 'p10',
    name: 'Residence No. 27 — Elevation',
    category: '3D Elevations',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['3D Elevation', 'Gate Design', 'Compound Wall'],
    description:
      'A four-storey contemporary residence with a rounded white balcony frame, warm wood slats, laser-cut jali panels, a full-height glazed stair window and glass-railed planter balconies at every level, finished with a lit stone compound wall.',
    image: '/images/elevation-residence-27.jpg',
    size: 'medium',
  },
  {
    id: 'p11',
    name: 'Cream Villa — Golden Elevation',
    category: '3D Elevations',
<<<<<<< HEAD
=======
    location: 'Andhra Pradesh',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['3D Elevation', 'Ornamental Gate', 'Landscape Design'],
    description:
      'A two-storey villa in warm cream with LED cove lighting, a curved canopy edge, a jali-fronted planter balcony, a stone and wood-louver feature tower and a premium wood-and-metal compound gate.',
    image: '/images/elevation-cream-villa.jpg',
    size: 'medium',
  },
  {
    id: 'p12',
    name: 'Third Floor Plan — 27×54 ft',
    category: '2D Floor Plans',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['2D Floor Plan', 'Space Optimization', 'Lift Planning'],
    description:
      'A detailed third-floor layout featuring a master bedroom with attached bath, a second bedroom, living, dining, kitchen, utility, Namaz room, balcony and a 4×5 lift — drawn to scale with clear dimensions.',
    image: '/images/plan-third-floor-27x54.jpg',
    size: 'medium',
  },
  {
    id: 'p13',
    name: 'Master Bedroom — Interior Design',
    category: 'Interiors',
<<<<<<< HEAD
=======
    location: 'Chittoor, AP',
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
    year: '2026',
    services: ['Interior Design', 'Furniture Layout', 'Lighting Design'],
    description:
      'A serene master bedroom with a sculpted tropical-leaf relief wall, upholstered teal bed, geometric rug, fluted panelling with navy and gold inlays, a window seat and a layered cove-lit ceiling.',
    image: '/images/interior-master-bedroom.jpg',
    size: 'medium',
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div
        className="absolute inset-0 bg-[#151515]/95 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 bg-[#1A1A1A] border border-[#F5F0E7]/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Modal header image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[#151515]/80 text-[#F5F0E7] hover:text-[#FFD43B] hover:bg-[#151515] transition-colors"
            aria-label="Close project"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="section-label text-[#FFD43B] block mb-1">{project.category}</span>
            <h3
              className="font-display text-[#F5F0E7]"
              style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}
            >
              {project.name}
            </h3>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h4 className="font-body font-bold text-[#FFD43B] text-xs tracking-widest uppercase mb-3">
              ABOUT THIS PROJECT
            </h4>
            <p className="font-body text-[#A7A7A2] leading-relaxed">{project.description}</p>
          </div>
          <div>
            <div className="mb-5">
              <h4 className="font-body font-bold text-[#FFD43B] text-xs tracking-widest uppercase mb-3">DETAILS</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm border-b border-[#F5F0E7]/10 pb-2">
                  <span className="text-[#A7A7A2]">Year</span>
                  <span className="text-[#F5F0E7] font-semibold">{project.year}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#F5F0E7]/10 pb-2">
                  <span className="text-[#A7A7A2]">Category</span>
                  <span className="text-[#F5F0E7] font-semibold">{project.category}</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-body font-bold text-[#FFD43B] text-xs tracking-widest uppercase mb-3">SERVICES</h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="font-body text-xs text-[#F5F0E7] border border-[#F5F0E7]/20 px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="https://wa.me/919949556301"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gold-metallic font-body font-extrabold text-xs tracking-widest uppercase py-3.5 shadow-lg transition-all duration-300"
            >
              DISCUSS THIS PROJECT
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          activeCategory.toLowerCase().includes(p.category.toLowerCase())
        );

  // Keeps the grid tiled with no holes: the first card is large, and the last card
  // stretches to fill whatever is left in its row.
  const n = filtered.length;
  const leftover = n >= 4 ? (n - 3) % 3 : 0; // lg: 3 columns, first card + 2 beside it
  const wideLg = (i: number) =>
    i === n - 1 && i > 0 && leftover === 1 ? 'lg:col-span-3' : i === n - 1 && i > 0 && leftover === 2 ? 'lg:col-span-2' : '';
  const wideMd = (i: number) => (i === n - 1 && i > 0 && (n - 1) % 2 === 1 ? 'md:col-span-2' : '');

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative bg-[#F5F0E7] py-20 md:py-32 overflow-hidden"
        aria-label="Featured projects portfolio"
      >
        {/* Dark top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#151515]" />

        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section header */}
          <div className="grid lg:grid-cols-2 gap-8 mb-14">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-px bg-[#F36B38]" />
                <span className="section-label text-[#F36B38] tracking-[0.3em]">FEATURED PROJECTS</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.9 }}
                className="font-display text-[#151515] leading-none"
                style={{ fontSize: 'clamp(36px, 6.5vw, 88px)', lineHeight: 0.92 }}
              >
                BUILT WITH VISION.
                <br />
                <span className="text-[#2563EB]">DEFINED BY</span>
                <br />
                DETAIL.
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col justify-end"
            >
              <p className="font-body text-[#151515]/70 leading-relaxed mb-6" style={{ fontSize: 'clamp(14px, 1.5vw, 17px)' }}>
                Explore the spaces, structures and design ideas that bring architecture to life.
                Each project begins with your vision and ends with a space built around your life.
              </p>
              <p className="section-label text-[#A7A7A2]">
<<<<<<< HEAD
                Real portfolio projects by Modern Architect
=======
                Real portfolio projects by Modern Architect — Chittoor, AP
>>>>>>> 2741147b14b1b5c601190da84194e368552e70c2
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Project categories"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body font-semibold text-xs tracking-widest uppercase px-4 py-2.5 border transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#151515] text-gold-metallic border-[#D4AF37]'
                    : 'bg-transparent text-[#151515]/60 border-[#151515]/30 hover:border-[#151515] hover:text-[#151515]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project Grid — Asymmetric Magazine Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`group relative overflow-hidden cursor-pointer ${
                    i === 0
                      ? 'md:col-span-2 md:row-span-2'
                      : `${wideMd(i)} ${wideLg(i)}`
                  }`}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                  aria-label={`View ${project.name}`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      i === 0
                        ? 'aspect-[16/10]'
                        : wideLg(i) === 'lg:col-span-3'
                        ? 'aspect-[4/3] lg:aspect-[21/9]'
                        : wideLg(i) === 'lg:col-span-2'
                        ? 'aspect-[4/3] lg:aspect-[16/9]'
                        : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#151515]/0 group-hover:bg-[#151515]/70 transition-all duration-500" />

                    {/* Category tag */}
                    <div className="absolute top-4 left-4">
                      <span className="font-body font-extrabold text-[10px] tracking-widest uppercase bg-gold-metallic text-[#121212] px-2.5 py-1 shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover reveal */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <h3
                        className="font-display text-[#F5F0E7] leading-tight mb-2"
                        style={{ fontSize: i === 0 ? 'clamp(24px, 3vw, 40px)' : 'clamp(18px, 2vw, 26px)' }}
                      >
                        {project.name}
                      </h3>
                      <p className="section-label text-[#A7A7A2] mb-4">{project.year}</p>
                      <div className="flex items-center gap-2 text-gold-metallic font-body font-extrabold text-xs tracking-widest uppercase">
                        VIEW PROJECT
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Card footer (always visible) */}
                  <div className="bg-[#151515] px-4 py-3 flex items-center justify-between group-hover:bg-[#1e1e1e] transition-colors duration-300">
                    <div>
                      <h3 className="font-body font-bold text-[#F5F0E7] text-sm">{project.name}</h3>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#FFD43B] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-14 text-center"
          >
            <a
              href="https://www.instagram.com/modernarchitect68/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-2 border-[#151515] text-[#151515] font-body font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-[#151515] hover:text-gold-metallic transition-all duration-300 shadow-sm"
              id="projects-view-all-btn"
            >
              VIEW ALL PROJECTS
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
