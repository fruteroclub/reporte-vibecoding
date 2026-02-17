import Link from "next/link";
import { ArrowLeft, Twitter, Trophy, Users, Video, TrendingUp, ExternalLink } from "lucide-react";

export default function TwitterPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al Dashboard
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <Twitter className="w-12 h-12 text-cyan-400" />
          <div>
            <h1 className="text-4xl font-bold text-white">Métricas Twitter</h1>
            <p className="text-gray-400">Análisis completo de redes sociales</p>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard label="Impresiones Totales" value="49,109" />
          <StatCard label="Posts @fruteroclub" value="26" />
          <StatCard label="Menciones Externas" value="52" />
          <StatCard label="Estudiantes Postearon" value="27" />
        </div>

        {/* Top Posts */}
        <section className="glow-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Top Posts @fruteroclub</h2>
          </div>
          <div className="space-y-4">
            <PostRow impressions={2505} likes={44} comments={7} url="https://x.com/fruteroclub/status/2013346256668529076" />
            <PostRow impressions={2237} likes={25} comments={1} url="https://x.com/fruteroclub/status/2018776545846870034" />
            <PostRow impressions={2183} likes={21} comments={2} url="https://x.com/fruteroclub/status/2019063396067377657" />
            <PostRow impressions={1023} likes={6} comments={1} url="https://x.com/fruteroclub/status/2019892436227514626" />
            <PostRow impressions={988} likes={12} comments={1} url="https://x.com/fruteroclub/status/2019561684931633325" />
            <PostRow impressions={950} likes={17} comments={1} url="https://x.com/fruteroclub/status/2019425783325020161" />
            <PostRow impressions={656} likes={23} comments={6} url="https://x.com/fruteroclub/status/2022071248067661951" />
          </div>
        </section>

        {/* Communities */}
        <section className="glow-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Comunidades que Amplificaron</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <CommunityCard name="ETH Cinco de Mayo" handle="@ETHCincoDeMayo" impressions={2820} posts={3} />
            <CommunityCard name="Ethereum México" handle="@ethereum_mexico" impressions={1759} posts={2} />
            <CommunityCard name="meximalist" handle="@meximalist" impressions={1241} posts={1} />
            <CommunityCard name="FlashTalkCoto" handle="@FlashTalkCoto" impressions={1163} posts={1} />
            <CommunityCard name="HerDAO México" handle="@HerDao_Mexico" impressions={1085} posts={1} />
            <CommunityCard name="Ethereum MTY" handle="@eth_mty" impressions={989} posts={1} />
            <CommunityCard name="Espacio Cripto" handle="@EspacioCripto" impressions={738} posts={1} />
            <CommunityCard name="Cartagena Onchain" handle="@ctg_onchain" impressions={579} posts={1} />
          </div>
        </section>

        {/* Students */}
        <section className="glow-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Estudiantes que Postearon (27)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <StudentCard handle="@S4kurak" posts={4} engagement="Alto" />
            <StudentCard handle="@0xW4rw1ck" posts={3} engagement="Medio" />
            <StudentCard handle="@0xSofiverse" posts={3} engagement="Medio" />
            <StudentCard handle="@Yosoyraymon" posts={2} engagement="Alto" />
            <StudentCard handle="@WairaT" posts={2} engagement="Alto" />
            <StudentCard handle="@Wenlopezn" posts={2} engagement="Alto" />
            <StudentCard handle="@soylaloreto" posts={2} engagement="Medio" />
            <StudentCard handle="@0xSoulChain" posts={2} engagement="Medio" />
            <StudentCard handle="@JustEmilyr" posts={2} engagement="Medio" />
            <StudentCard handle="@eldudedelcafe" posts={2} engagement="Medio" />
            <StudentCard handle="@NayeliChZ_zehn" posts={2} engagement="Bajo" />
            <StudentCard handle="@monitalan" posts={1} engagement="Alto" />
            <StudentCard handle="@junesandrea1717" posts={1} engagement="Alto" />
            <StudentCard handle="@elizabeths_14" posts={1} engagement="Alto" />
            <StudentCard handle="@Kalipssoh" posts={1} engagement="Bajo" />
          </div>
        </section>

        {/* Videos */}
        <section className="glow-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Video className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Videos (5,118 views totales)</h2>
          </div>
          <div className="space-y-4">
            <VideoRow views={2473} likes={45} comments={4} url="https://x.com/fruteroclub/status/2020294987854807367" />
            <VideoRow views={2378} likes={30} comments={1} url="https://x.com/fruteroclub/status/2020996571446509806" />
            <VideoRow views={267} likes={12} comments={0} note="Space del bootcamp" url="https://x.com/fruteroclub/status/2021697943804301575" />
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-card rounded-xl p-6 text-center">
      <p className="text-3xl font-bold gradient-text">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

function PostRow({ impressions, likes, comments, url }: { impressions: number; likes: number; comments: number; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800/50 px-2 rounded transition-colors">
      <div className="flex items-center gap-6">
        <span className="text-white font-bold">{impressions.toLocaleString()} imp</span>
        <span className="text-purple-400">{likes} likes</span>
        <span className="text-gray-400">{comments} comentarios</span>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-500" />
    </a>
  );
}

function CommunityCard({ name, handle, impressions, posts }: { name: string; handle: string; impressions: number; posts: number }) {
  return (
    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
      <h3 className="text-white font-semibold">{name}</h3>
      <p className="text-cyan-400 text-sm">{handle}</p>
      <div className="flex justify-between mt-3">
        <span className="text-gray-400">{impressions.toLocaleString()} imp</span>
        <span className="text-gray-500">{posts} posts</span>
      </div>
    </div>
  );
}

function StudentCard({ handle, posts, engagement }: { handle: string; posts: number; engagement: string }) {
  const colors = {
    Alto: "text-green-400",
    Medio: "text-amber-400",
    Bajo: "text-gray-400",
  };
  return (
    <div className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
      <span className="text-purple-400">{handle}</span>
      <div className="text-right">
        <span className="text-white">{posts} posts</span>
        <span className={`text-xs ml-2 ${colors[engagement as keyof typeof colors]}`}>{engagement}</span>
      </div>
    </div>
  );
}

function VideoRow({ views, likes, comments, url, note }: { views: number; likes: number; comments: number; url: string; note?: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800/50 px-2 rounded transition-colors">
      <div className="flex items-center gap-6">
        <span className="text-white font-bold">{views.toLocaleString()} views</span>
        <span className="text-purple-400">{likes} likes</span>
        <span className="text-gray-400">{comments} comentarios</span>
        {note && <span className="text-cyan-400 text-sm">({note})</span>}
      </div>
      <ExternalLink className="w-4 h-4 text-gray-500" />
    </a>
  );
}
