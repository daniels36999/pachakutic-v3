import {
  Droplets, Route, Map, TrendingUp, Leaf, ShieldAlert, Monitor, Users, GraduationCap, Briefcase,
  MapPin, Hammer, Ruler, Flag, HandHelping, School, Landmark, Scale, ClipboardCheck, Store, Recycle,
  Footprints, ShieldCheck, TrainFront, Phone, Mail, Link2, Menu, X, ChevronDown, ArrowRight,
  ArrowDown, Plus, User, Building2, Camera, Vote, Sprout, Compass,
} from "lucide-react";

// Registro único de iconos (estilo Lucide). Para usar uno nuevo, impórtalo y agrégalo aquí.
const icons = {
  Droplets, Route, Map, TrendingUp, Leaf, ShieldAlert, Monitor, Users, GraduationCap, Briefcase,
  MapPin, Hammer, Ruler, Flag, HandHelping, School, Landmark, Scale, ClipboardCheck, Store, Recycle,
  Footprints, ShieldCheck, TrainFront, Phone, Mail, Link2, Menu, X, ChevronDown, ArrowRight,
  ArrowDown, Plus, User, Building2, Camera, Vote, Sprout, Compass,
};

export default function Icon({ name, size = 22, strokeWidth = 1.9, ...rest }) {
  const Cmp = icons[name] || Flag;
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" focusable="false" {...rest} />;
}
