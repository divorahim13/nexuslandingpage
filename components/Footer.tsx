import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/10 font-mono text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold uppercase mb-8 font-display">NEXUS_SYSTEMS</h3>
            <p className="text-gray-500 max-w-sm mb-8">
              Constructing the backbone of the next internet.
              <br/>We operate in the shadows to keep you in the light.
            </p>
            <div className="flex gap-4">
               <input type="email" placeholder="ENTER_EMAIL" className="bg-white/5 border border-white/10 px-4 py-2 w-64 focus:border-acid focus:outline-none text-white placeholder-gray-600" />
               <button className="bg-white/10 border border-white/10 px-4 hover:bg-acid hover:text-black transition-colors">→</button>
            </div>
          </div>

          <div>
            <h4 className="text-gray-500 mb-6 uppercase">Directory</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-acid transition-colors">[01] ABOUT</a></li>
              <li><a href="#" className="hover:text-acid transition-colors">[02] SERVICES</a></li>
              <li><a href="#" className="hover:text-acid transition-colors">[03] CAREERS</a></li>
              <li><a href="#" className="hover:text-acid transition-colors">[04] LOGIN</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-500 mb-6 uppercase">Socials</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-acid transition-colors">TWITTER / X</a></li>
              <li><a href="#" className="hover:text-acid transition-colors">GITHUB</a></li>
              <li><a href="#" className="hover:text-acid transition-colors">LINKEDIN</a></li>
              <li><a href="#" className="hover:text-acid transition-colors">DISCORD</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-8 text-xs text-gray-600">
            <div className="font-mono whitespace-pre hidden md:block opacity-30">
{`
   _   _ ________  ___   _ _____ 
  | \ | |  ___\\  \\/  /  | /  ___|
  |  \\| | |__  \\  .  /   | \\ \`--. 
  | . \` |  __| /  .  \\   | |\`--. \\
  | |\\  | |___/  / \\  \\|_| /\\__/ /
  \\_| \\_|____/___/  \\_\\___/\\____/ 
`}
            </div>
            <div className="text-right">
                <p>© 2024 NEXUS INC. ALL RIGHTS RESERVED.</p>
                <p className="mt-2">PRIVACY PROTOCOL // TERMINAL USE POLICY</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;