import { Metadata } from "next";
import { 
  Twitter, Trophy, Users, TrendingUp, Heart, 
  MessageCircle, Eye, ExternalLink, Video
} from "lucide-react";
import { BackLink, PageHeader, SectionTitle, DataTable } from "@/components/SharedComponents";

export const metadata: Metadata = {
  title: "Métricas Twitter | Reporte VibeCoding",
  description: "Análisis completo de métricas de Twitter",
};

// Top posts with actual URLs
const topPosts = [
  { rank: 1, impressions: "2,505", likes: 44, comments: 7, url: "https://x.com/fruteroclub/status/2013346256668529076" },
  { rank: 2, impressions: "2,237", likes: 25, comments: 1, url: "https://x.com/fruteroclub/status/2018776545846870034" },
  { rank: 3, impressions: "2,183", likes: 21, comments: 2, url: "https://x.com/fruteroclub/status/2019063396067377657" },
  { rank: 4, impressions: "1,023", likes: 6, comments: 1, url: "https://x.com/fruteroclub/status/2019892436227514626" },
  { rank: 5, impressions: "988", likes: 12, comments: 1, url: "https://x.com/fruteroclub/status/2019561684931633325" },
  { rank: 6, impressions: "950", likes: 17, comments: 1, url: "https://x.com/fruteroclub/status/2019425783325020161" },
  { rank: 7, impressions: "656", likes: 23, comments: 6, url: "https://x.com/fruteroclub/status/2022071248067661951" },
  { rank: 8, impressions: "539", likes: 5, comments: 0, url: "https://x.com/fruteroclub/status/2019795935652376877" },
  { rank: 9, impressions: "538", likes: 15, comments: 1, url: "https://x.com/fruteroclub/status/2019892433698361470" },
  { rank: 10, impressions: "530", likes: 17, comments: 4, url: "https://x.com/fruteroclub/status/2021627745080598807" },
];

export default function TwitterPage() {
  return (
    <main className="min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <BackLink />
        
        <PageHeader 
          title="Métricas Twitter" 
          subtitle="@fruteroclub • 49,109 impresiones totales"
          icon={<Twitter className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />}
        />

        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          <StatBox number="49,109" label="Impresiones" icon={<Eye className="w-5 h-5 text-orange-500" />} />
          <StatBox number="26" label="Posts @fruteroclub" icon={<Twitter className="w-5 h-5 text-orange-500" />} />
          <StatBox number="52" label="Menciones Externas" icon={<MessageCircle className="w-5 h-5 text-orange-500" />} />
          <StatBox number="27" label="Estudiantes Activos" icon={<Users className="w-5 h-5 text-orange-500" />} />
        </div>

        {/* @fruteroclub Section */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Posts de @fruteroclub" icon={<Twitter className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} subtitle="26 posts • 14,688 impresiones" />
          
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6 mt-6">
            <h4 className="text-white font-semibold mb-4">Top 10 Posts por Impresiones</h4>
            <div className="space-y-3">
              {topPosts.map((post) => (
                <TopPostRow key={post.rank} {...post} />
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-[#262626]">
              <h4 className="text-white font-semibold mb-3">Métricas Agregadas</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-orange-500">14,688</p>
                  <p className="text-gray-400 text-sm">Impresiones</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-500">319</p>
                  <p className="text-gray-400 text-sm">Likes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-500">2.17%</p>
                  <p className="text-gray-400 text-sm">Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Top Comunidades" icon={<Trophy className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} subtitle="Menciones por comunidad" />
          
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6 mt-6">
            <DataTable 
              headers={["Comunidad", "Posts", "Impresiones", "Likes"]}
              rows={[
                [<span key="1" className="text-orange-500 font-medium">ETH Cinco de Mayo</span>, "3", "2,820", "42"],
                ["Ethereum México", "2", "1,759", "40"],
                ["meximalist", "1", "1,241", "23"],
                ["FlashTalkCoto", "1", "1,163", "13"],
                ["HerDAO México", "1", "1,085", "23"],
                ["Wendy Lopez", "2", "1,637", "39"],
                ["Raymon", "2", "1,444", "58"],
                ["Waira", "2", "1,324", "52"],
                ["Espacio Cripto", "1", "738", "23"],
                ["Cartagena Onchain", "1", "579", "16"],
              ]}
            />
          </div>
        </section>

        {/* Active Students Section */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Estudiantes Más Activos" icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} subtitle="27 estudiantes postearon" />
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-6">
            <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6">
              <h4 className="text-white font-semibold mb-4">Top por Cantidad de Posts</h4>
              <div className="space-y-3">
                <StudentStatRow handle="@S4kurak" posts={4} impressions="1,249" />
                <StudentStatRow handle="@0xW4rw1ck" posts={3} impressions="894" />
                <StudentStatRow handle="@0xSofiverse" posts={3} impressions="793" />
                <StudentStatRow handle="@Yosoyraymon" posts={2} impressions="1,444" />
                <StudentStatRow handle="@WairaT" posts={2} impressions="1,324" />
              </div>
            </div>
            
            <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6">
              <h4 className="text-white font-semibold mb-4">Top por Impresiones</h4>
              <div className="space-y-3">
                <StudentStatRow handle="@Yosoyraymon" posts={2} impressions="1,444" />
                <StudentStatRow handle="@WairaT" posts={2} impressions="1,324" />
                <StudentStatRow handle="@S4kurak" posts={4} impressions="1,249" />
                <StudentStatRow handle="@JustEmily" posts={2} impressions="959" />
                <StudentStatRow handle="@0xW4rw1ck" posts={3} impressions="894" />
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Videos" icon={<Video className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} subtitle="3 videos • 5,118 views" />
          
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6 mt-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-orange-500">3</p>
                <p className="text-gray-400 text-sm">Videos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">5,118</p>
                <p className="text-gray-400 text-sm">Views Totales</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">1,706</p>
                <p className="text-gray-400 text-sm">Promedio/Video</p>
              </div>
            </div>
          </div>
        </section>

        {/* External Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://docs.google.com/spreadsheets/d/1IR9E70JuFQyE-WiCGs4ziZHBaSyQwysdkHtV0JK2UPE/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ver Datos Completos
          </a>
          <a 
            href="https://twitter.com/fruteroclub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#141414] border border-[#333] hover:border-orange-500/50 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Twitter className="w-4 h-4" />
            @fruteroclub
          </a>
        </div>
      </div>
    </main>
  );
}

function StatBox({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="text-2xl md:text-3xl font-bold text-orange-500">{number}</p>
      <p className="text-gray-400 text-xs md:text-sm mt-1">{label}</p>
    </div>
  );
}

function TopPostRow({ rank, impressions, likes, comments, url }: { rank: number; impressions: string; likes: number; comments: number; url: string }) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 py-2 border-b border-[#262626] last:border-0 hover:bg-[#1a1a1a] -mx-2 px-2 rounded transition-colors group"
    >
      <span className="text-orange-500 font-bold w-8">#{rank}</span>
      <div className="flex-1 flex flex-wrap gap-3 text-sm">
        <span className="flex items-center gap-1 text-gray-400">
          <Eye className="w-3 h-3" /> {impressions}
        </span>
        <span className="flex items-center gap-1 text-gray-400">
          <Heart className="w-3 h-3" /> {likes}
        </span>
        <span className="flex items-center gap-1 text-gray-400">
          <MessageCircle className="w-3 h-3" /> {comments}
        </span>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors" />
    </a>
  );
}

function StudentStatRow({ handle, posts, impressions }: { handle: string; posts: number; impressions: string }) {
  return (
    <a 
      href={"https://twitter.com/" + handle.replace("@", "")}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between py-2 border-b border-[#262626] last:border-0 hover:bg-[#1a1a1a] -mx-2 px-2 rounded transition-colors group"
    >
      <span className="text-orange-500 group-hover:underline">{handle}</span>
      <div className="flex gap-4 text-sm">
        <span className="text-gray-400">{posts} posts</span>
        <span className="text-white font-medium">{impressions} imp</span>
      </div>
    </a>
  );
}
