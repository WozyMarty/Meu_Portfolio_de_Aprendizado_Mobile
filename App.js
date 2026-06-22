import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Animated,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

// ─── Design Tokens ───────────────────────────────────────────────
const COLORS = {
  bg: '#0D0D0F',
  surface: '#1A1A1F',
  surfaceLight: '#222228',
  accent: '#8B5CF6',
  accentLight: '#A78BFA',
  accentCyan: '#06B6D4',
  accentGreen: '#34D399',
  text: '#F4F4F5',
  textSecondary: '#A1A1AA',
  textMuted: '#71717A',
  border: '#27272A',
  glassBg: 'rgba(139, 92, 246, 0.08)',
  glassBorder: 'rgba(139, 92, 246, 0.15)',
  cardShadow: '#000',
};

// ─── Data ────────────────────────────────────────────────────────
const skills = [
  { id: '1', emoji: '📱', title: 'React Native', desc: 'Apps mobile multiplataforma' },
  { id: '2', emoji: '⚡', title: 'JavaScript / TS', desc: 'Aplicações modernas e tipadas' },
  { id: '3', emoji: '🗄️', title: 'Supabase', desc: 'BaaS, auth e banco de dados' },
  { id: '4', emoji: '🔄', title: 'n8n & Docker', desc: 'Automação e containers' },
  { id: '5', emoji: '📊', title: 'Python & Data', desc: 'Análise e ciência de dados' },
  { id: '6', emoji: '🍃', title: 'NoSQL', desc: 'MongoDB e bancos flexíveis' },
  { id: '7', emoji: '🖥️', title: 'Delphi', desc: 'Sistemas nativos desktop' },
  { id: '8', emoji: '🌐', title: 'Git & GitHub', desc: 'Versionamento e colaboração' },
];

const projects = [
  {
    id: '1',
    title: 'App Portfólio Mobile',
    description: 'Aplicativo de portfólio pessoal construído com React Native e Expo, com design moderno e animações fluidas.',
    tags: ['React Native', 'Expo', 'JavaScript'],
    color: '#8B5CF6',
    github: 'https://github.com/',
  },
  {
    id: '2',
    title: 'Automação ComEx',
    description: 'Pipeline de automação para processos de comércio exterior usando n8n, Docker e integração com APIs externas.',
    tags: ['n8n', 'Docker', 'Python'],
    color: '#06B6D4',
    github: 'https://github.com/',
  },
  {
    id: '3',
    title: 'Dashboard Analytics',
    description: 'Dashboard de análise de dados com visualizações interativas para tomada de decisão estratégica.',
    tags: ['Python', 'Data Science', 'Supabase'],
    color: '#34D399',
    github: 'https://github.com/',
  },
];

const socialLinks = [
  { id: 'gh', label: 'GitHub', icon: '⟨/⟩', url: 'https://github.com/', color: '#F4F4F5' },
  { id: 'li', label: 'LinkedIn', icon: 'in', url: 'https://linkedin.com/', color: '#0A66C2' },
  { id: 'wa', label: 'WhatsApp', icon: '💬', url: 'https://wa.me/55', color: '#25D366' },
  { id: 'em', label: 'E-mail', icon: '✉', url: 'mailto:seuemail@email.com', color: '#8B5CF6' },
];

// ─── Animated Section Component ─────────────────────────────────
function FadeInSection({ children, delay = 0, style }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 700,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[{ opacity, transform: [{ translateY }] }, style]}>
      {children}
    </Animated.View>
  );
}

// ─── Section Header Component ───────────────────────────────────
function SectionHeader({ label, title }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionLabel}>{label}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionDivider}>
        <View style={styles.sectionDividerAccent} />
      </View>
    </View>
  );
}

// ─── Main App ───────────────────────────────────────────────────
export default function App() {
  // Hero pulsing dot animation
  const pulseAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.4, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const openLink = (url) => {
    Linking.openURL(url).catch(() => {});
  };

  // ── Hero ──
  const renderHero = () => (
    <FadeInSection delay={100}>
      <View style={styles.hero}>
        {/* Status badge */}
        <View style={styles.statusBadge}>
          <Animated.View style={[styles.statusDot, { transform: [{ scale: pulseAnim }] }]} />
          <Text style={styles.statusText}>Disponível para projetos</Text>
        </View>

        {/* Name */}
        <Text style={styles.heroName}>João Pedro{'\n'}Macedo Alves</Text>

        {/* Tagline */}
        <Text style={styles.heroTagline}>
          Desenvolvedor Mobile & Automação
        </Text>

        {/* Description */}
        <Text style={styles.heroDesc}>
          Criando aplicações mobile modernas e soluções de automação com foco em performance e experiência do usuário.
        </Text>

        {/* CTA Button */}
        <TouchableOpacity
          style={styles.ctaButton}
          activeOpacity={0.8}
          onPress={() => openLink('https://wa.me/55')}
        >
          <Text style={styles.ctaButtonText}>Entre em contato →</Text>
        </TouchableOpacity>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>7+</Text>
            <Text style={styles.statLabel}>Tecnologias</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3+</Text>
            <Text style={styles.statLabel}>Projetos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>∞</Text>
            <Text style={styles.statLabel}>Curiosidade</Text>
          </View>
        </View>
      </View>
    </FadeInSection>
  );

  // ── About ──
  const renderAbout = () => (
    <FadeInSection delay={200}>
      <View style={styles.section}>
        <SectionHeader label="01" title="Quem sou" />

        <View style={styles.aboutCard}>
          {/* Avatar with initials */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JP</Text>
            </View>
            <View style={styles.avatarGlow} />
          </View>

          <Text style={styles.aboutHighlight}>
            Transformo ideias em experiências digitais
          </Text>

          <Text style={styles.aboutText}>
            Acredito que{' '}
            <Text style={styles.aboutBold}>
              tecnologia e design caminham juntos para impulsionar soluções
            </Text>{' '}
            e conectar pessoas a produtos de forma autêntica.
          </Text>

          <Text style={styles.aboutText}>
            Minha missão é criar aplicações que não apenas funcionem perfeitamente, mas que
            proporcionem uma experiência excepcional — do primeiro toque ao resultado final.
            Atuo com desenvolvimento mobile, automação de processos e análise de dados.
          </Text>

          {/* About tags */}
          <View style={styles.aboutTagsRow}>
            {['Mobile', 'Automação', 'Data Science', 'Backend'].map((tag) => (
              <View key={tag} style={styles.aboutTag}>
                <Text style={styles.aboutTagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </FadeInSection>
  );

  // ── Skills ──
  const renderSkills = () => (
    <FadeInSection delay={300}>
      <View style={styles.section}>
        <SectionHeader label="02" title="Competências" />

        <View style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <FadeInSection key={skill.id} delay={350 + index * 80} style={styles.skillCardWrapper}>
              <View style={styles.skillCard}>
                <Text style={styles.skillEmoji}>{skill.emoji}</Text>
                <Text style={styles.skillTitle}>{skill.title}</Text>
                <Text style={styles.skillDesc}>{skill.desc}</Text>
              </View>
            </FadeInSection>
          ))}
        </View>
      </View>
    </FadeInSection>
  );

  // ── Projects ──
  const renderProjects = () => (
    <FadeInSection delay={400}>
      <View style={styles.section}>
        <SectionHeader label="03" title="Projetos" />

        {projects.map((project, index) => (
          <FadeInSection key={project.id} delay={450 + index * 120}>
            <View style={styles.projectCard}>
              {/* Color accent bar */}
              <View style={[styles.projectAccentBar, { backgroundColor: project.color }]} />

              {/* Project thumbnail placeholder */}
              <View style={[styles.projectThumbnail, { backgroundColor: project.color + '15' }]}>
                <Text style={[styles.projectThumbnailIcon, { color: project.color }]}>
                  {project.title.charAt(0)}
                </Text>
              </View>

              <View style={styles.projectContent}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDescription}>{project.description}</Text>

                {/* Tags */}
                <View style={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <View key={tag} style={[styles.projectTag, { borderColor: project.color + '40' }]}>
                      <Text style={[styles.projectTagText, { color: project.color }]}>{tag}</Text>
                    </View>
                  ))}
                </View>

                {/* GitHub link */}
                <TouchableOpacity
                  style={styles.projectLink}
                  activeOpacity={0.7}
                  onPress={() => openLink(project.github)}
                >
                  <Text style={styles.projectLinkText}>Ver no GitHub →</Text>
                </TouchableOpacity>
              </View>
            </View>
          </FadeInSection>
        ))}
      </View>
    </FadeInSection>
  );

  // ── Contact / Footer ──
  const renderFooter = () => (
    <FadeInSection delay={500}>
      <View style={styles.footerSection}>
        <SectionHeader label="04" title="Contato" />

        <Text style={styles.footerHeadline}>
          Vamos trabalhar{'\n'}juntos?
        </Text>
        <Text style={styles.footerSubtext}>
          Estou disponível para projetos freelance, parcerias e oportunidades.
        </Text>

        {/* Social links */}
        <View style={styles.socialGrid}>
          {socialLinks.map((link) => (
            <TouchableOpacity
              key={link.id}
              style={styles.socialCard}
              activeOpacity={0.7}
              onPress={() => openLink(link.url)}
            >
              <Text style={[styles.socialIcon, { color: link.color }]}>{link.icon}</Text>
              <Text style={styles.socialLabel}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer bottom */}
        <View style={styles.footerBottom}>
          <View style={styles.footerDividerLine} />
          <Text style={styles.footerCopy}>
            Feito com 💜 por João Pedro
          </Text>
          <Text style={styles.footerYear}>© 2026</Text>
        </View>
      </View>
    </FadeInSection>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {renderHero()}
        {renderAbout()}
        {renderSkills()}
        {renderProjects()}
        {renderFooter()}
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ─────────────────────────────────────────────────────
const CARD_GAP = 12;
const SKILL_CARD_WIDTH = (width - 48 - CARD_GAP) / 2;

const styles = StyleSheet.create({
  // ── Layout ──
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // ── Hero ──
  hero: {
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 40,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(52, 211, 153, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.25)',
    borderRadius: 100,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginBottom: 28,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accentGreen,
    marginRight: 8,
  },
  statusText: {
    color: COLORS.accentGreen,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  heroName: {
    color: COLORS.text,
    fontSize: 42,
    fontWeight: '800',
    lineHeight: 48,
    letterSpacing: -1,
    marginBottom: 16,
  },
  heroTagline: {
    color: COLORS.accent,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  heroDesc: {
    color: COLORS.textSecondary,
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 28,
  },
  ctaButton: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accent,
    paddingHorizontal: 28,
    paddingVertical: 15,
    borderRadius: 14,
    marginBottom: 36,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    color: COLORS.text,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  statLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  statDivider: {
    width: 1,
    height: 36,
    backgroundColor: COLORS.border,
  },

  // ── Section Header ──
  section: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  sectionHeader: {
    marginBottom: 24,
  },
  sectionLabel: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  sectionDivider: {
    height: 3,
    backgroundColor: COLORS.border,
    borderRadius: 2,
    width: 60,
  },
  sectionDividerAccent: {
    height: 3,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
    width: 24,
  },

  // ── About ──
  aboutCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  avatarText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -1,
  },
  avatarGlow: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    top: -10,
    zIndex: 1,
  },
  aboutHighlight: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 28,
  },
  aboutText: {
    color: COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 14,
  },
  aboutBold: {
    color: COLORS.accentLight,
    fontWeight: '700',
  },
  aboutTagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 8,
  },
  aboutTag: {
    backgroundColor: COLORS.glassBg,
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  aboutTagText: {
    color: COLORS.accentLight,
    fontSize: 13,
    fontWeight: '600',
  },

  // ── Skills Grid ──
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: CARD_GAP,
  },
  skillCardWrapper: {
    width: SKILL_CARD_WIDTH,
  },
  skillCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 120,
  },
  skillEmoji: {
    fontSize: 28,
    marginBottom: 10,
  },
  skillTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  skillDesc: {
    color: COLORS.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },

  // ── Projects ──
  projectCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.cardShadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 6,
  },
  projectAccentBar: {
    height: 3,
    width: '100%',
  },
  projectThumbnail: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectThumbnailIcon: {
    fontSize: 40,
    fontWeight: '800',
    opacity: 0.6,
  },
  projectContent: {
    padding: 20,
  },
  projectTitle: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  projectDescription: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 14,
  },
  projectTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  projectTag: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  projectTagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  projectLink: {
    alignSelf: 'flex-start',
  },
  projectLinkText: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.2,
  },

  // ── Footer / Contact ──
  footerSection: {
    paddingHorizontal: 24,
    marginTop: 24,
    paddingBottom: 20,
  },
  footerHeadline: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 40,
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  footerSubtext: {
    color: COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 28,
  },
  socialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 36,
  },
  socialCard: {
    width: (width - 48 - 12) / 2,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  socialIcon: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  socialLabel: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: '600',
  },
  footerBottom: {
    alignItems: 'center',
  },
  footerDividerLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: 20,
  },
  footerCopy: {
    color: COLORS.textMuted,
    fontSize: 14,
    marginBottom: 4,
  },
  footerYear: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
});
