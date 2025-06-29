import { Phone, Mail } from "lucide-react";

export interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  phoneNumber: string;
  email: string;
  quote: string;
}

export interface KitaTeamProps {
  title: string;
  subtitle: string;
  teamMember: TeamMember;
}

export const KitaTeam = ({
  title,
  subtitle,
  teamMember
}: KitaTeamProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="relative mb-8 lg:mb-0">
                <img
                  src={teamMember.imageUrl}
                  alt={teamMember.name}
                  className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
                  aria-label={teamMember.name}
                  aria-describedby={teamMember.name}
                  aria-expanded={false}
                  aria-pressed={false}
                  aria-controls="team-member"
                  aria-live="polite"
                  aria-busy={false}
                />
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-stadtkueken-brown mb-2 font-amatic">
                {teamMember.name}
              </h3>
              <p className="text-xl text-stadtkueken-orange font-semibold mb-6">
                {teamMember.title}
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href={`tel:${teamMember.phoneNumber}`}
                  className="flex items-center justify-center lg:justify-start space-x-3 text-stadtkueken-brown hover:text-stadtkueken-orange transition-colors"
                  aria-label={`Telefon ${teamMember.name}`}
                  aria-describedby={`Telefon ${teamMember.name}`}
                  aria-expanded={false}
                  aria-pressed={false}
                  aria-controls="team-member"
                  aria-live="polite"
                  aria-busy={false}
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-lg">{teamMember.phoneNumber}</span>
                </a>
                <a 
                  href={`mailto:${teamMember.email}`}
                  className="flex items-center justify-center lg:justify-start space-x-3 text-stadtkueken-brown hover:text-stadtkueken-orange transition-colors"
                  aria-label={`Email ${teamMember.name}`}
                  aria-describedby={`Email ${teamMember.name}`}
                  aria-expanded={false}
                  aria-pressed={false}
                  aria-controls="team-member"
                  aria-live="polite"
                  aria-busy={false}
                >
                  <Mail className="h-5 w-5" />
                  <span>{teamMember.email}</span>
                </a>
              </div>

              <div className="bg-stadtkueken-beige rounded-2xl p-6">
                <blockquote className="text-lg text-stadtkueken-brown italic leading-relaxed">
                  "{teamMember.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 